package org.vaadin.chatbox.client;

public class ChatUser {

    private static long latestUserId = 0;

    private static synchronized String getNewUserId() {
        return "user" + (++latestUserId);
    }

    public static ChatUser newUser(String name) {
        return newUser(name, "user1", "user1");
    }

    public static ChatUser newUser(String name, String innerStyle, String outerStyle) {
        return new ChatUser(getNewUserId(), name, innerStyle, outerStyle);
    }

    private final String id;
    private final String name;
    private final String innerStyle, outerStyle;

    public ChatUser(String id, String name, String innerStyle, String outerStyle) {
        this.id = id;
        this.name = name;
        this.innerStyle = innerStyle;
        this.outerStyle = outerStyle;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof ChatUser) {
            ChatUser ou = (ChatUser) obj;
            return id.equals(ou.id);
        }
        return false;
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }

    @Override
    public String toString() {
        return "{" + id + ":" + name + ":" + innerStyle + "}";
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getInnerStyle() {
        return innerStyle;
    }

    public String getOuterStyle() {
        return outerStyle;
    }

}
