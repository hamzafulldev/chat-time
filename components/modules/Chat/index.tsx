"use client"
import React, { useState } from 'react';
import Layout from '@/components/layouts/Layout';

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        'Hi, I am message',
        'Hi, I am message',
        'Hi, I am message',
    ]);

    const handleSendMessage = async () => {
        if (!message) return;

        try {
            const response = await fetch('/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    sender: 'User1',
                    receiver: 'User2',
                    message,
                }),
            });

            const data = await response.json();

            if (data.status === 'success') {
                setMessages((prevMessages) => [...prevMessages, message]);
                setMessage('');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <Layout>
            <div className='h-[90vh]'>
                <div className='h-full p-10 flex'>
                    <div className='w-[40%] border-2 p-4'>Right Side</div>
                    <div className='w-[60%] border-2 p-4 flex flex-col'>
                        <div>New Chat</div>
                        <div className='flex-1 p-4'>
                            {messages.map((msg, index) => (
                                <div key={index}>{msg}</div>
                            ))}
                        </div>
                        <div className='flex items-center'>
                            <input
                                className='flex-1 p-2 border rounded'
                                type='text'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder='Type your message'
                            />
                            <button
                                className='ml-2 p-2 bg-blue-500 text-white rounded'
                                onClick={handleSendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Chat;
