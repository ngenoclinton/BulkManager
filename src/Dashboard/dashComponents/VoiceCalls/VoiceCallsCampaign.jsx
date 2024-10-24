import React, { useState, useRef, useEffect } from 'react'
import { Upload, Mic, Play, Pause, Save, Trash2, Download, Calendar, Clock, Send, Edit2, Users } from 'lucide-react'
import { RiStopFill } from 'react-icons/ri'
import { DatePicker, TimePicker, Input, Button, message } from 'antd'
import dayjs from 'dayjs'


export default function VoiceCallCampaign() {
  const [phoneNumbers, setPhoneNumbers] = useState('')
  const [audioFile, setAudioFile] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [scheduledDate, setScheduledDate] = useState(null)
  const [scheduledTime, setScheduledTime] = useState(null)
  const [isSaving, setIsSaving] = useState(false)
  const [audioName, setAudioName] = useState('Recorded Audio')

  const audioRef = useRef(null)
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])

  useEffect(() => {
    return () => {
      if (audioFile) {
        URL.revokeObjectURL(audioFile.url)
      }
    }
  }, [audioFile])

  const handlePhoneNumberChange = (e) => {
    setPhoneNumbers(e.target.value)
  }

  const handleFileUpload = (info) => {
    if (info.file.status === 'done') {
      const file = info.file.originFileObj
      const url = URL.createObjectURL(file)
      setAudioFile({ name: file.name, url })
      message.success(`${file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      mediaRecorderRef.current = new MediaRecorder(stream)
      chunksRef.current = []

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/wav' })
        const url = URL.createObjectURL(blob)
        setAudioFile({ name: audioName, url })
      }

      mediaRecorderRef.current.start()
      setIsRecording(true)
      setIsPaused(false)
    } catch (error) {
      console.error('Error accessing microphone:', error)
      message.error('Failed to access microphone')
    }
  }

  const pauseRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.pause()
      setIsPaused(true)
    }
  }

  const resumeRecording = () => {
    if (mediaRecorderRef.current && isRecording && isPaused) {
      mediaRecorderRef.current.resume()
      setIsPaused(false)
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop()
      setIsRecording(false)
      setIsPaused(false)
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
    if (audioFile) {
      URL.revokeObjectURL(audioFile.url)
    }
    setAudioFile(null)
    setAudioName('Recorded Audio')
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
      message.success('Audio saved as template')
    }, 1000)
  }

  const handleSendNow = () => {
    // Implement send now logic
    message.success('Voice call sent!')
  }

  const handleSaveDraft = () => {
    // Implement save draft logic
    message.success('Voice call saved to drafts')
  }

  const handleBroadcast = () => {
    // Implement broadcast logic
    message.success('Broadcasting to selected contacts')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create New Voice Call Campaign</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Phone Numbers</h2>
        <Input.TextArea
          className="mb-4"
          rows={4}
          placeholder="Enter phone numbers (one per line) or upload a CSV file"
          value={phoneNumbers}
          onChange={(e) => setPhoneNumbers(e.target.value)}
        />
        {/* <Upload
          accept=".csv"
          showUploadList={false}
          beforeUpload={(file) => {
            // Implement CSV parsing logic here
            message.success(`${file.name} parsed successfully`)
            return false // Prevent default upload behavior
          }}
        >
          <Button icon={<Upload />} style={{ borderColor: '#f15c22', color: '#f15c22' }}>
            Upload CSV
          </Button>
        </Upload> */}
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
            <Button
              type="primary"
              icon={<Mic />}
              onClick={startRecording}
              style={{ backgroundColor: '#f15c22', borderColor: '#f15c22' }}
            >
              {isRecording ? 'Recording...' : 'Start Recording'}
            </Button>
            {/* <Upload
              accept="audio/*"
              showUploadList={false}
              onChange={handleFileUpload}
            >
              <Button icon={<Upload />}>Upload Audio</Button>
            </Upload> */}
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
              <Button onClick={playAudio} icon={<Play />} style={{ color: '#f15c22' }} />
              <Button onClick={pauseAudio} icon={<Pause />} style={{ color: '#f15c22' }} />
              <Input
                value={audioName}
                onChange={(e) => setAudioName(e.target.value)}
                style={{ width: '200px', marginLeft: '8px' }}
              />
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={saveAsTemplate}
                icon={<Save />}
                style={{ backgroundColor: '#f15c22', borderColor: '#f15c22', color: 'white' }}
                loading={isSaving}
              >
                Save as Template
              </Button>
              <Button onClick={deleteAudio} icon={<Trash2 />} danger>
                Delete
              </Button>
              <Button onClick={downloadAudio} icon={<Download />} type="primary" style={{ backgroundColor: '#f15c22', borderColor: '#f15c22' }}>
                Download
              </Button>
              <Button onClick={handleBroadcast} icon={<Users />} style={{ borderColor: '#f15c22', color: '#f15c22' }}>
                Broadcast
              </Button>
            </div>
          </div>
        )}
        {isRecording && (
          <div className="mt-4 flex space-x-2">
            {isPaused ? (
              <Button onClick={resumeRecording} icon={<Play />} style={{ borderColor: '#f15c22', color: '#f15c22' }}>
                Resume
              </Button>
            ) : (
              <Button onClick={pauseRecording} icon={<Pause />} style={{ borderColor: '#f15c22', color: '#f15c22' }}>
                Pause
              </Button>
            )}
            <Button onClick={stopRecording} icon={<RiStopFill />} danger>
              Stop
            </Button>
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
        <Button onClick={handleSaveDraft} style={{ borderColor: '#f15c22', color: '#f15c22' }}>
          Save as Draft
        </Button>
        <Button
          onClick={handleSendNow}
          type="primary"
          icon={<Send />}
          style={{ backgroundColor: '#f15c22', borderColor: '#f15c22' }}
        >
          Send Now
        </Button>
      </div>
    </div>
  )
}