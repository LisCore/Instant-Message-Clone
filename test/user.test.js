import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import User from '../models/user.model.js'; // Adjusted the path to your user model file

describe('User Model Unit Tests', () => {
    let mongoServer;

    beforeAll(async () => {
        mongoServer = await MongoMemoryServer.create();
        const uri = mongoServer.getUri();
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        await mongoServer.stop();
    });

    afterEach(async () => {
        const collections = mongoose.connection.collections;
        for (const key in collections) {
            const collection = collections[key];
            await collection.deleteMany({});
        }
    });

    it('should have a default profilePic value', async () => {
        const userData = {
            fullName: 'John Doe',
            username: 'johndoe',
            password: 'password',
            gender: 'male',
        };

        const user = new User(userData);
        const savedUser = await user.save();

        // Check if profilePic is set to the default value
        expect(savedUser.profilePic).toEqual("");
    });

    it('should create a user with default profilePic when not provided', async () => {
        const userData = {
            fullName: 'Jane Doe',
            username: 'janedoe',
            password: 'password',
            gender: 'female',
        };

        const user = new User(userData);
        const savedUser = await user.save();

        // Check if profilePic is set to the default value
        expect(savedUser.profilePic).toEqual("");
    });

    it('should create a user with provided profilePic', async () => {
        const userData = {
            fullName: 'Alice Smith',
            username: 'alicesmith',
            password: 'password',
            gender: 'female',
            profilePic: 'https://example.com/profile.jpg',
        };

        const user = new User(userData);
        const savedUser = await user.save();

        // Check if profilePic is set to the provided value
        expect(savedUser.profilePic).toEqual(userData.profilePic);
    });

    it('should create a user with a default profilePic when not provided', async () => {
        const userData = {
            fullName: 'Bob Johnson',
            username: 'bobjohnson',
            password: 'password',
            gender: 'male',
        };

        const user = new User(userData);
        const savedUser = await user.save();

        // Check if profilePic is set to the default value
        expect(savedUser.profilePic).toEqual("");
    });

    it('should fail to create a user with an invalid gender', async () => {
        const userData = {
            fullName: 'Invalid Gender',
            username: 'invalidgender',
            password: 'password',
            gender: 'unknown', // Invalid gender
        };

        // Attempt to create a user with an invalid gender
        const user = new User(userData);

        let error;
        try {
            await user.save();
        } catch (e) {
            error = e;
        }

        // Check if an error is thrown due to the invalid gender
        expect(error).toBeTruthy();
    });

    it('should fail to create a user with a duplicate username', async () => {
        // Create a user with a specific username
        const existingUser = new User({
            fullName: 'Existing User',
            username: 'existinguser',
            password: 'password',
            gender: 'male',
        });

        // Save the user to the database
        await existingUser.save();

        // Attempt to create another user with the same username
        const userData = {
            fullName: 'Duplicate Username',
            username: 'existinguser', // Same username as the existing user
            password: 'password',
            gender: 'female',
        };

        // Attempt to create a user with a duplicate username
        const user = new User(userData);

        let error;
        try {
            await user.save();
        } catch (e) {
            error = e;
        }

        // Check if an error is thrown due to the duplicate username
        expect(error).toBeTruthy();
    });

    it('should fail to create a user with a password less than 6 characters', async () => {
        const userData = {
            fullName: 'Short Password User',
            username: 'shortpassworduser',
            password: '12345', // Password length less than 6 characters
            gender: 'female',
        };

        const user = new User(userData);

        let error;
        try {
            await user.save();
        } catch (e) {
            error = e;
        }

        // Check if an error is thrown due to the short password
        expect(error).toBeTruthy();
    });

    it('should fail to create a user with an invalid gender', async () => {
        const userData = {
            fullName: 'Invalid Gender User',
            username: 'invalidgenderuser',
            password: 'password',
            gender: 'other', // Invalid gender value
        };

        const user = new User(userData);

        let error;
        try {
            await user.save();
        } catch (e) {
            error = e;
        }

        // Check if an error is thrown due to the invalid gender
        expect(error).toBeTruthy();
    });

    it('should fail to create a user with a password less than 6 characters', async () => {
        const userData = {
            fullName: 'Short Password User',
            username: 'shortpassworduser',
            password: 'pass', // Password length less than 6 characters
            gender: 'male',
        };

        const user = new User(userData);

        let error;
        try {
            await user.save();
        } catch (e) {
            error = e;
        }

        // Check if an error is thrown due to the short password
        expect(error).toBeTruthy();
    });

});