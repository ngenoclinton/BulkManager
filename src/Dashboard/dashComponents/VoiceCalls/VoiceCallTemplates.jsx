import React, { useState } from 'react'
import { Table, Input, Button, Popconfirm, message, Modal, Form, Tooltip } from 'antd'
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined, InfoCircleOutlined } from '@ant-design/icons'

const initialTemplates = [
  {
    id: '1',
    name: 'Welcome Message',
    audioFile: 'welcome.mp3',
    createdDate: '2023-05-20T10:30:00Z',
  },
  {
    id: '2',
    name: 'Payment Reminder',
    audioFile: 'payment_reminder.mp3',
    createdDate: '2023-05-21T14:45:00Z',
  },
  // Add more sample data as needed
]

function VoiceCallTemplates() {
  const [templates, setTemplates] = useState(initialTemplates)
  const [searchText, setSearchText] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingTemplate, setEditingTemplate]   = useState(null)
  const [form] = Form.useForm()

  const handleSearch = (value) => {
    setSearchText(value)
  }

  const handleEdit = (template) => {
    setEditingTemplate(template)
    form.setFieldsValue(template)
    setIsModalVisible(true)
  }

  const handleDelete = (id) => {
    setTemplates(templates.filter(template => template.id !== id))
    message.success('Template deleted successfully')
  }

  const handleModalOk = () => {
    form.validateFields().then((values) => {
      if (editingTemplate) {
        // Edit existing template
        setTemplates(templates.map(template =>
          template.id === editingTemplate.id ? { ...template, ...values } : template
        ))
        message.success('Template updated successfully')
      } else {
        // Create new template
        const newTemplate = {
          id: Date.now().toString(),
          ...values,
          createdDate: new Date().toISOString(),
        }
        setTemplates([...templates, newTemplate])
        message.success('New template created successfully')
      }
      setIsModalVisible(false)
      form.resetFields()
      setEditingTemplate(null)
    })
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    form.resetFields()
    setEditingTemplate(null)
  }

  const columns = [
    {
      title: 'Template Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Audio File',
      dataIndex: 'audioFile',
      key: 'audioFile',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
      render: (date) => new Date(date).toLocaleString(),
      sorter: (a, b) => new Date(a.createdDate) - new Date(b.createdDate),
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
            title="Are you sure you want to delete this template?"
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

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Voice Call Templates</h1>
        <div className="flex items-center">
          <Input
            placeholder="Search templates"
            prefix={<SearchOutlined />}
            onChange={(e) => handleSearch(e.target.value)}
            style={{ width: 250, marginRight: 16 }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setIsModalVisible(true)}
            style={{ backgroundColor: '#f15c22', borderColor: '#f15c22' }}
          >
            Create New Template
          </Button>
        </div>
      </div>

      <Table columns={columns} dataSource={filteredTemplates} rowKey="id" />

      <Modal
        title={editingTemplate ? "Edit Template" : "Create New Template"}
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okButtonProps={{ style: { backgroundColor: '#f15c22', borderColor: '#f15c22' } }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Template Name"
            rules={[{ required: true, message: 'Please input the template name!' }]}
          >
            <Input />
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

      <Tooltip title="Templates are pre-recorded audio messages that can be used for multiple voice calls.">
        <InfoCircleOutlined style={{ position: 'fixed', bottom: 20, right: 20, fontSize: 24, color: '#f15c22' }} />
      </Tooltip>
    </div>
  )
}

export default VoiceCallTemplates