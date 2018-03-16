package org.vaadin.chatbox.client;

import java.util.Date;

/**
 * One line of chat.
 */
public class ChatLine {

    private final Date timestamp;
    private final ChatUser user;
    private final String text;

    public ChatLine(String text) {
        this(new Date(), null, text);
    }

    public ChatLine(ChatUser user, String text) {
        this(new Date(), user, text);
    }

    public ChatLine(Date timestamp, ChatUser user, String text) {
        this.timestamp = timestamp;
        this.user = user;
        this.text = text;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public ChatUser getUser() {
        return user;
    }

    public String getText() {
        return text;
    }

    @Override
    public String toString() {
        return (user == null ? "" : (user.getName() + ": ")) + text;
    }

    @Override
    public boolean equals(Object other) {
        if (other instanceof ChatLine) {
            ChatLine ocl = (ChatLine) other;
            return user == null ? ocl.user == null : user.equals(ocl.user) && ocl.text.equals(text);
        }
        return false;
    }

    @Override
    public int hashCode() {
        return text.hashCode();
    }

}
