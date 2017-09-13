class MessageChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'messages'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send_message(args)
  	ActionCable.server.broadcast('messages', args)
  end
end
