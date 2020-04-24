import java.util.ArrayList;

public abstract class MessengerGroupSubject {

	private ArrayList<PostObserver> observers = new ArrayList<PostObserver>();
	
	public void subscribe(PostObserver observer) {
		
		if (!observers.contains(observer)) {
			observers.add(observer);
		}
	}
	
	public void unsubscribe(PostObserver observer) {
		
		if (observers.contains(observer)) {
			observers.remove(observer);
		}
	}
	
	public void sendMessage(Message post) {
		for (PostObserver o : observers) {
			o.update(post);
		}
	}
}

public interface PostObserver {

	public void update(Message message);
}

public class Subscriber implements PostObserver {

	private String name;
	private Message currentMessage;
	
	public Subscriber (String name) {
		this.name = name;
	}
	
	@Override
	public void update(Message message) {
		currentMessage = message;
		System.out.println(name + " has received Message about " + currentMessage.getTopic());
	}
}

public class Message {

	private String topic;
	private String content;
	
	public Message(String topic, String content) {
		this.setTopic(topic);
		this.setContent(content);
	}

	public String getTopic() {
		return topic;
	}

	public void setTopic(String topic) {
		this.topic = topic;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
}

public class Group extends MessengerGroupSubject {

	private Message currentMessage;
	
	public Group(Message message) {
		this.currentMessage = message;
	}
	
	public Message getCurrentMessage() {
		
		return currentMessage;
	}
	
	public void setCurrentMessage(Message newMessage) {
		this.currentMessage = newMessage;
		System.out.println("A new message was posted!");
		this.sendMessage(currentMessage);
	}
}

public class Demonstration {
    
    public static void main(String [] args) {
        
        Group gr = new Group(new Message("Hi everyone", "What's up?"));
        
        Subscriber s1 = new Subscriber("Peter");
        Subscriber s2 = new Subscriber("Paul");
        Subscriber s3 = new Subscriber("Mary");
        
        gr.subscribe(s1);
        gr.subscribe(s2);
        
        gr.setCurrentMessage(new Message("Greetings", "Hello everyone"));
        
        gr.unsubscribe(s1);
        gr.subscribe(s3);
        
        gr.setCurrentMessage(new Message("Leaving", "Bye everyone"));
    }
}