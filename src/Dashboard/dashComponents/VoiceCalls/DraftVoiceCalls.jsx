import React, { useState } from 'react'
import { Table, Input, Button, Popconfirm, message, Modal, Form } from 'antd'
import { SearchOutlined, EditOutlined, DeleteOutlined, SendOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
// interface DraftVoiceCall {
//   id: string
//   name: string
//   phoneNumbers: string[]
//   audioFile: string
//   createdAt: string
// }

const initialDrafts= [
  {
    id: '1',
    name: 'Customer Feedback Survey',
    phoneNumbers: ['+1234567890', '+1987654321'],
    audioFile: 'feedback_survey.mp3',
    createdAt: '2023-05-15T10:30:00Z',
  },
  {
    id: '2',
    name: 'Product Launch Announcement',
    phoneNumbers: ['+1122334455', '+1555666777'],
    audioFile: 'product_launch.mp3',
    createdAt: '2023-05-16T14:45:00Z',
  },
  // Add more sample data as needed
]

export default function DraftVoiceCalls() {
  const [drafts, setDrafts] = useState(initialDrafts)
  const [searchText, setSearchText] = useState('')
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [isEditModalVisible, setIsEditModalVisible] = useState(false)
  const [editingDraft, setEditingDraft] = useState(null)
  const [form] = Form.useForm()

  const handleSearch = (value) => {
    setSearchText(value)
  }

  const handleEdit = (draft) => {
    setEditingDraft(draft)
    form.setFieldsValue({
      name: draft.name,
      phoneNumbers: draft.phoneNumbers.join(', '),
      audioFile: draft.audioFile,
    })
    setIsEditModalVisible(true)
  }

  const handleEditModalOk = () => {
    form.validateFields().then((values) => {
      const updatedDraft = {
        ...editingDraft,
        name: values.name,
        phoneNumbers: values.phoneNumbers.split(',').map((num) => num.trim()),
        audioFile: values.audioFile,
      }
      setDrafts(drafts.map(draft => draft.id === updatedDraft.id ? updatedDraft : draft))
      setIsEditModalVisible(false)
      message.success('Draft updated successfully')
    })
  }

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false)
  }

  const handleDelete = (id) => {
    setDrafts(drafts.filter(draft => draft.id !== id))
    message.success('Draft deleted successfully')
  }

  const handleSendNow = () => {
    // Implement send now functionality for selected drafts
    message.success(`Sending ${selectedRowKeys.length} drafts`)
    setSelectedRowKeys([])
  }

  const filteredDrafts = drafts.filter(
    draft =>
      draft.name.toLowerCase().includes(searchText.toLowerCase()) ||
      draft.phoneNumbers.some(number => number.includes(searchText))
  )

  const columns = [
    {
      title: 'Draft Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Phone Number(s)',
      dataIndex: 'phoneNumbers',
      key: 'phoneNumbers',
      render: (phoneNumbers) => phoneNumbers.join(', '),
    },
    {
      title: 'Audio File',
      dataIndex: 'audioFile',
      key: 'audioFile',
    },
    {
      title: 'Created Date/Time',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date) => dayjs(date).format('YYYY-MM-DD HH:mm:ss'),
      sorter: (a, b) => dayjs(a.createdAt).unix() - dayjs(b.createdAt).unix(),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <span>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ marginRight: 8, color: '#f15c22', borderColor: '#f15c22' }}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this draft?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
            okButtonProps={{ style: { backgroundColor: '#f15c22', borderColor: '#f15c22' } }}
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ]

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedKeys) => {
      setSelectedRowKeys(selectedKeys)
    },
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Draft Voice Calls</h1>
        <Input
          placeholder="Search drafts"
          prefix={<SearchOutlined />}
          onChange={e => handleSearch(e.target.value)}
          style={{ width: 250 }}
        />
      </div>

      <div className="mb-4">
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendNow}
          disabled={selectedRowKeys.length === 0}
          style={{ backgroundColor: '#f15c22', borderColor: '#f15c22' }}
        >
          Send Selected Drafts
        </Button>
      </div>

      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={filteredDrafts}
        rowKey="id"
        pagination={{ pageSize: 10 }}
      />

      <Modal
        title="Edit Draft"
        visible={isEditModalVisible}
        onOk={handleEditModalOk}
        onCancel={handleEditModalCancel}
        okButtonProps={{ style: { backgroundColor: '#f15c22', borderColor: '#f15c22' } }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Draft Name"
            rules={[{ required: true, message: 'Please input the draft name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phoneNumbers"
            label="Phone Numbers"
            rules={[{ required: true, message: 'Please input the phone numbers!' }]}
          >
            <Input.TextArea placeholder="Enter phone numbers separated by commas" />
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