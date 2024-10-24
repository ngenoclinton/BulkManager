import React, { useState, useRef } from 'react'
import { Upload, Mic, Play, Pause,Save, Trash2, Download, Calendar, Clock, Send } from 'lucide-react'

import { RiStopFill } from 'react-icons/ri'
import { DatePicker, TimePicker, Input, Button, message } from 'antd'
import dayjs from 'dayjs'


export default function VoiceCallCampaign() {
  const [phoneNumbers, setPhoneNumbers] = useState('')
  const [audioFile, setAudioFile] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [scheduledDate, setScheduledDate] = useState('')
  const [scheduledTime, setScheduledTime] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  const audioRef = useRef(null)
  const mediaRecorderRef = useRef(null)

  const handlePhoneNumberChange = (e) => {
    setPhoneNumbers(e.target.value)
  }

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setAudioFile({ name: file.name, url })
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      const chunks= [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.push(e.data)
      }

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' })
        const url = URL.createObjectURL(blob)
        setAudioFile({ name: 'Recorded Audio', url })
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
    } catch (error) {
      console.error('Error accessing microphone:', error)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
    }
  }

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play()
    }
  }

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
    }
  }

  const deleteAudio = () => {
    setAudioFile(null)
  }

  const downloadAudio = () => {
    if (audioFile) {
      const a = document.createElement('a')
      a.href = audioFile.url
      a.download = audioFile.name
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }

  const saveAsTemplate = () => {
    setIsSaving(true)
    // Simulate saving process
    setTimeout(() => {
      setIsSaving(false)
      alert('Audio saved as template')
    }, 1000)
  }

  const handleSendNow = () => {
    // Implement send now logic
    alert('Voice call sent!')
  }

  const handleSaveDraft = () => {
    // Implement save draft logic
    alert('Voice call saved to drafts')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Voice Call Campaign</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Phone Numbers</h2>
        <textarea
          className="w-full h-32 p-2 border rounded-md focus:ring-[#f15c22] focus:border-[#f15c22]"
          placeholder="Enter phone numbers (one per line) or upload a CSV file"
          value={phoneNumbers}
          onChange={handlePhoneNumberChange}
        ></textarea>
        <div className="mt-2">
            <label htmlFor="csv-upload" className="cursor-pointer inline-flex items-center px-4 py-2 border border-[#f15c22] text-[#f15c22] rounded-md hover:bg-[#f15c22] hover:text-white transition-colors">
              <Upload
                className="w-5 h-5 mr-2"
                accept=".csv"
                showUploadList={false}
                beforeUpload={(file) => {
                  // Implement CSV parsing logic here
                  message.success(`${file.name} parsed successfully`)
                  return false // Prevent default upload behavior
                }}/>
              Upload CSV
            </label>
            <input id="csv-upload" type="file" accept=".csv" className="hidden" onChange={() => alert('CSV upload functionality to be implemented')} />
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Audio Handling</h2>
        {!audioFile ? (
          <div className="flex space-x-4">
            <button
              onClick={startRecording}
              className={`px-4 py-2 rounded-md ${isRecording ? 'bg-red-500 text-white' : 'bg-[#f15c22] text-white'} flex items-center`}
            >
              <Mic className="w-5 h-5 mr-2" />
              {isRecording ? 'Recording...' : 'Start Recording'}
            </button>
            <label htmlFor="audio-upload" className="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
              <Upload
              className="w-5 h-5 mr-2"
              accept="audio/*"
              showUploadList={false}
              onChange={handleFileUpload}
            ></Upload>
              Upload Audio
            </label>
            <input
              id="audio-upload"
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-4">
              <audio ref={audioRef} src={audioFile.url} className="hidden" />
              <button onClick={playAudio} className="p-2 text-[#f15c22] hover:text-[#d94d1a]">
                <Play className="w-6 h-6" />
              </button>
              <button onClick={pauseAudio} className="p-2 text-[#f15c22] hover:text-[#d94d1a]">
                <Pause className="w-6 h-6" />
              </button>
              <span className="ml-2">{audioFile.name}</span>
            </div>
            <div className="flex space-x-2">
              <button onClick={saveAsTemplate} className="px-4 py-2 bg-[#f15c22] text-white rounded-md hover:bg-[#d94d1a] transition-colors flex items-center">
                <Save className="w-5 h-5 mr-2" />
                {isSaving ? 'Saving...' : 'Save as Template'}
              </button>
              <button onClick={deleteAudio} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center">
                <Trash2 className="w-5 h-5 mr-2" />
                Delete
              </button>
              <button onClick={downloadAudio} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Schedule</h2>
        <div className="flex space-x-4">
          <div className="flex-1">
            <DatePicker
              className="w-full"
              value={scheduledDate}
              onChange={(date) => setScheduledDate(date)}
            />
          </div>
          <div className="flex-1">
            <TimePicker
              className="w-full"
              value={scheduledTime}
              onChange={(time) => setScheduledTime(time)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={handleSaveDraft} className="px-6 py-2 border border-[#f15c22] text-[#f15c22] rounded-md hover:bg-[#f15c22] hover:text-white transition-colors">
          Save as Draft
        </button>
        <button onClick={handleSendNow} className="px-6 py-2 bg-[#f15c22] text-white rounded-md hover:bg-[#d94d1a] transition-colors flex items-center">
          <Send className="w-5 h-5 mr-2" />
          Send Now
        </button>
      </div>
    </div>
  )
}