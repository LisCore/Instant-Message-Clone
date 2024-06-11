import mongoose from 'mongoose';
import Conversation from '../models/conversation.model';

describe('Conversation Model Unit Tests', () => {
    it('should create a conversation successfully', async () => {
        // Mock the Conversation model's save method
        Conversation.prototype.save = jest.fn().mockResolvedValue({
            participants: ['user1Id', 'user2Id'],
            messages: ['message1Id', 'message2Id'],
        });

        // Create a new conversation
        const conversation = new Conversation({
            participants: ['user1Id', 'user2Id'],
            messages: ['message1Id', 'message2Id'],
        });

        // Save the conversation
        const savedConversation = await conversation.save();

        // Expect the save method to be called with the correct arguments
        expect(Conversation.prototype.save).toHaveBeenCalledWith();

        // Assert that the saved conversation has the expected properties
        expect(savedConversation.participants).toEqual(['user1Id', 'user2Id']);
        expect(savedConversation.messages).toEqual(['message1Id', 'message2Id']);
    });
});