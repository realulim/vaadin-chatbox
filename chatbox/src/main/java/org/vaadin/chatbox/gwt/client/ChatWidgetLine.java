package org.vaadin.chatbox.gwt.client;

import org.vaadin.chatbox.gwt.shared.ChatLine;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.event.dom.client.ClickHandler;
import com.google.gwt.regexp.shared.MatchResult;
import com.google.gwt.regexp.shared.RegExp;
import com.google.gwt.user.client.ui.Anchor;
import com.google.gwt.user.client.ui.FlowPanel;
import com.google.gwt.user.client.ui.InlineLabel;
import com.google.gwt.user.client.ui.Widget;

public class ChatWidgetLine extends FlowPanel {

	private static final RegExp ITEM_RE = RegExp.compile(
			"{{([^:}]*):([^:}]*):([^:}]*)}}", "g");
	
	private static final RegExp URL_RE = RegExp.compile(
			"(http(?:s)?://[^ ]+)", "g");
	
	private final ChatWidget parent;
	private boolean clickableUsers = true;

	public ChatWidgetLine(ChatLine line, ChatWidget parent) {
		this.parent = parent;
		if (line.getUserId() != null) {
			add(createUserLabel(line.getUserId(), line.getUserName(),
					line.getUserStyle()));
			add(createLabel(": ", null));
		}
		String style = (line.getUserId()==null) ? "infotext" : "chattext";
		create(line.getText(), style);
	}

	private void create(String text, String textStyle) {
		int start = 0;
		MatchResult r = ITEM_RE.exec(text);
		while (r != null) {
			String part = text.substring(start, r.getIndex());
			addText(part, textStyle);
			
			
			add(createItemLabel(r));

			start = ITEM_RE.getLastIndex();
			r = ITEM_RE.exec(text);
		}
		addText(text.substring(start), textStyle);
	}

	private void addText(String text, String style) {
		
		int start = 0;
		MatchResult r = URL_RE.exec(text);
		while (r != null) {
			String part = text.substring(start, r.getIndex());
			add(createLabel(part, style));
			
			add(createUrlLabel(r));

			start = URL_RE.getLastIndex();
			r = URL_RE.exec(text);
		}
		add(createLabel(text.substring(start), style));
	}

	private InlineLabel createItemLabel(MatchResult r) {
		String value = r.getGroup(1).replace("%58", ":")
				.replace("%123", "{").replace("%125", "}");
		String style = r.getGroup(2);
		String itemId = r.getGroup(3);
		return createLabel(value, style, itemId);
	}
	
	private Widget createUrlLabel(MatchResult r) {
		Anchor a = new Anchor(r.getGroup(1), r.getGroup(1), "_blank");
		return a;
	}

	private InlineLabel createLabel(String text, String style,
			final String itemId) {
		InlineLabel label = new InlineLabel(text);
		if (!style.isEmpty()) {
			label.setStylePrimaryName(style);
		}
		if (!itemId.isEmpty()) {
			label.addClickHandler(new ClickHandler() {
//				@Override
				public void onClick(ClickEvent event) {
					parent.clicked(itemId);
				}
			});
		}
		return label;
	}

	private static InlineLabel createLabel(String text, String style) {
		InlineLabel label = new InlineLabel(text);
		if (style != null) {
			label.setStylePrimaryName(style);
		}
		return label;
	}

	private InlineLabel createUserLabel(final String userId, String userName,
			String userStyle) {
		InlineLabel label = new InlineLabel(userName);
		label.setStylePrimaryName(userStyle);
		if (clickableUsers) {
			label.addClickHandler(new ClickHandler() {
//				@Override
				public void onClick(ClickEvent event) {
					parent.clickedUser(userId);
				}
			});
		}
		return label;
	}

}
