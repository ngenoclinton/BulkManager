import React, { useState } from 'react'
import { Table, Input, Button, message } from 'antd'
import { SearchOutlined, EyeOutlined, RedoOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
 
const initialSentCalls = [
  {
    id: '1',
    recipientName: 'John Doe',
    phoneNumber: '+1234567890',
    audioFile: 'welcome_message.mp3',
    sentDateTime: '2023-05-20T10:30:00Z',
    status: 'Delivered',
  },
  {
    id: '2',
    recipientName: 'Jane Smith',
    phoneNumber: '+1987654321',
    audioFile: 'product_update.mp3',
    sentDateTime: '2023-05-20T11:45:00Z',
    status: 'Failed',
  },
  // Add more sample data as needed
]

function SentVoiceCalls() {
  const [sentCalls, setSentCalls] = useState(initialSentCalls)
  const [searchText, setSearchText] = useState('')

  const handleSearch = (value) => {
    setSearchText(value)
  }

  const handleViewDetails = (id) => {
    // Implement view details functionality
    message.info(`Viewing details for call ID: ${id}`)
  }

  const handleResend = (id) => {
    // Implement resend functionality
    message.success(`Resending call with ID: ${id}`)
  }

  const filteredCalls = sentCalls.filter(
    call =>
      call.recipientName.toLowerCase().includes(searchText.toLowerCase()) ||
      call.phoneNumber.includes(searchText) ||
      dayjs(call.sentDateTime).format('YYYY-MM-DD').includes(searchText)
  )

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
      title: 'Audio File',
      dataIndex: 'audioFile',
      key: 'audioFile',
    },
    {
      title: 'Sent Date/Time',
      dataIndex: 'sentDateTime',
      key: 'sentDateTime',
      render: (date) => dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
      sorter: (a, b) => dayjs(a.sentDateTime).unix() - dayjs(b.sentDateTime).unix(),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span style={{ color: status === 'Delivered' ? 'green' : 'red' }}>
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
            icon={<EyeOutlined />}
            onClick={() => handleViewDetails(record.id)}
            style={{ marginRight: 8 }}
          >
            View
          </Button>
          <Button
            icon={<RedoOutlined />}
            onClick={() => handleResend(record.id)}
            disabled={record.status === 'Delivered'}
          >
            Resend
          </Button>
        </span>
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Sent Voice Calls</h1>
        <Input
          placeholder="Search by recipient, phone, or date"
          prefix={<SearchOutlined />}
          onChange={(e) => handleSearch(e.target.value)}
          style={{ width: 300 }}
        />
      </div>

      <Table
        columns={columns}
        dataSource={filteredCalls}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
      />
    </div>
  )
}

export default SentVoiceCalls