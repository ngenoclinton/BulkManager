import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload } from 'lucide-react';
import 'remixicon/fonts/remixicon.css';

const BulkCommunicationSystem = () => {
  const [messageType, setMessageType] = useState('sms');
  const [recipients, setRecipients] = useState('');
  const [message, setMessage] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [importedContacts, setImportedContacts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Sending ${messageType} to ${recipients.split(',').length} recipients`);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        const contacts = content.split('\n').map(line => {
          const [name, phone] = line.split(',');
          return { name: name.trim(), phone: phone.trim() };
        });
        setImportedContacts(contacts);
        setRecipients(contacts.map(contact => contact.phone).join(','));
      };
      reader.readAsText(file);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <h2 className="text-2xl font-bold">Bulk Communication System</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select value={messageType} onValueChange={setMessageType}>
            <SelectTrigger>
              <SelectValue placeholder="Select message type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sms">SMS</SelectItem>
              <SelectItem value="voice">Voice Call</SelectItem>
              <SelectItem value="ussd">USSD</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex items-center space-x-2">
            <textarea
              className="flex-grow min-h-[100px] p-2 border rounded-md"
              placeholder="Enter recipient phone numbers (comma-separated)"
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
            />
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Import Contacts</AlertDialogTitle>
                  <AlertDialogDescription>
                    Upload a CSV file with contacts (format: name,phone)
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <input 
                  type="file" 
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="w-full"
                />
                <AlertDialogFooter>
                  <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          
          {messageType === 'voice' ? (
            <input 
              type="file" 
              accept="audio/*"
              onChange={(e) => setAudioFile(e.target.files[0])}
              className="w-full"
            />
          ) : (
            <textarea
              className="w-full min-h-[100px] p-2 border rounded-md"
              placeholder={`Enter your ${messageType.toUpperCase()} message`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          )}
          
          <Button type="submit">
            Send {messageType.toUpperCase()}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BulkCommunicationSystem;