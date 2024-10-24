import React, { useState } from 'react'
import { Table, Input, Button, message, DatePicker, Tooltip, Popconfirm, Modal, Form } from 'antd'
import { SearchOutlined, EditOutlined, CloseOutlined, CalendarOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker

const initialScheduledCalls = [
  {
    id: '1',
    recipientName: 'John Doe',
    phoneNumber: '+1234567890',
    scheduledDateTime: '2023-06-01T10:30:00Z',
    audioFile: 'reminder_call.mp3',
    status: 'Pending',
  },
  {
    id: '2',
    recipientName: 'Jane Smith',
    phoneNumber: '+1987654321',
    scheduledDateTime: '2023-06-02T14:45:00Z',
    audioFile: 'follow_up.mp3',
    status: 'Pending',
  },
  // Add more sample data as needed
]

function ScheduledVoiceCalls() {
  const [scheduledCalls, setScheduledCalls] = useState(initialScheduledCalls)
  const [searchText, setSearchText] = useState('')
  const [dateRange, setDateRange] = useState(null)
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [editingCall, setEditingCall] = useState(null)
  const [form] = Form.useForm()

  const handleSearch = (value) => {
    setSearchText(value)
  }

  const handleDateRangeChange = (dates) => {
    setDateRange(dates)
  }

  const handleEdit = (call) => {
    setEditingCall(call)
    form.setFieldsValue({
      recipientName: call.recipientName,
      phoneNumber: call.phoneNumber,
      scheduledDateTime: dayjs(call.scheduledDateTime),
      audioFile: call.audioFile,
    })
    setIsEditModalVisible(true)
  }

  const handleEditModalOk = () => {
    form.validateFields().then((values) => {
      const updatedCall = {
        ...editingCall,
        ...values,
        scheduledDateTime: values.scheduledDateTime.toISOString(),
      }
      setScheduledCalls(scheduledCalls.map(call => call.id === updatedCall.id ? updatedCall : call))
      setIsEditModalVisible(false)
      message.success('Scheduled call updated successfully')
    })
  }

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false)
  }

  const handleCancel = (id) => {
    setScheduledCalls(scheduledCalls.filter(call => call.id !== id))
    message.success(`Cancelled scheduled call with ID: ${id}`)
  }

  const filteredCalls = scheduledCalls.filter(call => {
    const matchesSearch = 
      call.recipientName.toLowerCase().includes(searchText.toLowerCase()) ||
      call.phoneNumber.includes(searchText)
    
    const matchesDateRange = 
      !dateRange ||
      (dayjs(call.scheduledDateTime).isAfter(dateRange[0]) &&
       dayjs(call.scheduledDateTime).isBefore(dateRange[1]))

    return matchesSearch && matchesDateRange
  })

  const columns = [
    {
      title: 'Recipient Name',
      dataIndex: 'recipientName',
      key: 'recipientName',
      sorter: (a, b) => a.recipientName.localeCompare(b.recipientName),
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Scheduled Date/Time',
      dataIndex: 'scheduledDateTime',
      key: 'scheduledDateTime',
      render: (date) => (
        <Tooltip title={dayjs(date).format('YYYY-MM-DD HH:mm:ss')}>
          <span>
            <CalendarOutlined style={{ marginRight: 8, color: '#f15c22' }} />
            {dayjs(date).format('YYYY-MM-DD HH:mm')}
          </span>
        </Tooltip>
      ),
      sorter: (a, b) => dayjs(a.scheduledDateTime).unix() - dayjs(b.scheduledDateTime).unix(),
    },
    {
      title: 'Audio File',
      dataIndex: 'audioFile',
      key: 'audioFile',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span style={{ color: '#f15c22', fontWeight: 'bold' }}>
          {status}
        </span>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <span>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8, borderColor: '#f15c22', color: '#f15c22' }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to cancel this scheduled call?"
            onConfirm={() => handleCancel(record.id)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { backgroundColor: '#f15c22', borderColor: '#f15c22' } }}
          >
            <Button
              icon={<CloseOutlined />}
              danger
            >
              Cancel
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Scheduled Voice Calls</h1>
        <div className="flex items-center space-x-4">
          <RangePicker
            onChange={handleDateRangeChange}
            style={{ marginRight: 16 }}
          />
          <Input
            placeholder="Search by recipient or phone"
            prefix={<SearchOutlined />}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 250 }}
          />
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={filteredCalls}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
      />

      <Modal
        title="Edit Scheduled Call"
        visible={isEditModalVisible}
        onOk={handleEditModalOk}
        onCancel={handleEditModalCancel}
        okButtonProps={{ style: { backgroundColor: '#f15c22', borderColor: '#f15c22' } }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="recipientName"
            label="Recipient Name"
            rules={[{ required: true, message: 'Please input the recipient name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[{ required: true, message: 'Please input the phone number!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="scheduledDateTime"
            label="Scheduled Date/Time"
            rules={[{ required: true, message: 'Please select the scheduled date and time!' }]}
          >
            <DatePicker showTime />
          </Form.Item>
          <Form.Item
            name="audioFile"
            label="Audio File"
            rules={[{ required: true, message: 'Please input the audio file name!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default ScheduledVoiceCalls