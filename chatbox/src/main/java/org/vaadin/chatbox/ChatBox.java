package org.vaadin.chatbox;

import java.util.ArrayList;
import java.util.List;

import com.vaadin.annotations.StyleSheet;
import com.vaadin.server.VaadinSession;

import org.vaadin.chatbox.SharedChat.ChatListener;
import org.vaadin.chatbox.client.ChatBoxClientRpc;
import org.vaadin.chatbox.client.ChatBoxServerRpc;
import org.vaadin.chatbox.client.ChatBoxState;
import org.vaadin.chatbox.client.ChatLine;
import org.vaadin.chatbox.client.ChatUser;

@StyleSheet("chatbox.css")
@SuppressWarnings("serial")
public final class ChatBox extends com.vaadin.ui.AbstractComponent implements ChatListener {

    // To process events from the client, we implement ServerRpc
    private final ChatBoxServerRpc rpc = new ChatBoxServerRpc() {

        @Override
        public void lineAdded(ChatBoxState.Line line) {
            chat.addLine(ChatBoxState.Line.convert(line));
        }

        @Override
        public void chatboxClicked() {
            for (ClickListener listener : clickListeners) {
                listener.chatBoxClicked();
            }
        }
    };

    public interface ClickListener {
        public void chatBoxClicked();
    }

    private final List<ClickListener> clickListeners = new ArrayList<ClickListener>();

    public void addClickListener(ClickListener listener) {
        clickListeners.add(listener);
    }

    public void removeClickListener(ClickListener listener) {
        clickListeners.remove(listener);
    }

    private SharedChat chat;

    private int numFrozenLinesOnClient = 0;

    public ChatBox(SharedChat chat) {
        super();
        setWidth("200px"); // default
        setHeight("200px"); // default
        this.chat = chat;
        registerRpc(rpc);
    }

    public void setUser(ChatUser user) {
        getState(true).user = ChatBoxState.User.convert(user);
    }

    public void setShowSendButton(boolean show) {
        getState(true).showSendButton = show;
    }

    @Override
    public void attach() {
        super.attach();
        chat.addListener(this);
    }

    @Override
    public void detach() {
        chat.removeListener(this);
        super.detach();
    }

    @Override
    public ChatBoxState getState(boolean markAsDirty) {
        return (ChatBoxState) super.getState(markAsDirty);
    }

    @Override
    public ChatBoxState getState() {
        return (ChatBoxState) super.getState();
    }

    @Override
    public void lineAdded(ChatLine line) {
        // TODO: not exactly sure how we should sync here...
        VaadinSession session = getSession();
        if (session == null) {
            return;
        }
        session.access(new Runnable() {
            @Override
            public void run() {
                ChatBox.this.markAsDirty();
            }
        });
    }

    @Override
    public void beforeClientResponse(boolean initial) {
        super.beforeClientResponse(initial);

        if (initial) {
            numFrozenLinesOnClient = 0;
        }

        List<ChatLine> lines = chat
                .getLinesStartingFrom(numFrozenLinesOnClient);
        if (!lines.isEmpty()) {
            numFrozenLinesOnClient += lines.size();
            ArrayList<ChatBoxState.Line> lis = new ArrayList<ChatBoxState.Line>(
                    lines.size());
            for (ChatLine line : lines) {
                lis.add(ChatBoxState.Line.convert(line));
            }
            getRpcProxy(ChatBoxClientRpc.class).addLines(lis);
        }
    }

    public void focusToInputField() {
        getRpcProxy(ChatBoxClientRpc.class).focus();
    }

}
