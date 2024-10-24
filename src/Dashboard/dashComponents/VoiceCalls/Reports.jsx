import React, { useState } from 'react'
import { DatePicker, Card, Statistic, Table, Button, Select } from 'antd'
import { DownloadOutlined, CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const { RangePicker } = DatePicker
const { Option } = Select

const initialReports = [
  {
    id: '1',
    recipientName: 'John Doe',
    phoneNumber: '+1234567890',
    callStatus: 'Successful',
    deliveryTime: '2023-05-25T10:30:00Z',
    audioFileStatus: 'Delivered',
  },
  {
    id: '2',
    recipientName: 'Jane Smith',
    phoneNumber: '+1987654321',
    callStatus: 'Failed',
    deliveryTime: '2023-05-25T11:45:00Z',
    audioFileStatus: 'Not Delivered',
  },
  // Add more sample data as needed
]

function DeliveryReports() {
  const [dateRange, setDateRange] = useState(null)
  const [reports, setReports] = useState(initialReports)

  const handleDateRangeChange = (dates) => {
    setDateRange(dates)
    // In a real application, you would fetch new data based on the date range
  }

  const columns = [
    {
      title: 'Recipient Name',
      dataIndex: 'recipientName',
      key: 'recipientName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Call Status',
      dataIndex: 'callStatus',
      key: 'callStatus',
      render: (status) => (
        <span style={{ color: status === 'Successful' ? 'green' : 'red' }}>
          {status === 'Successful' ? <CheckCircleOutlined /> : <CloseCircleOutlined />} {status}
        </span>
      ),
    },
    {
      title: 'Delivery Time',
      dataIndex: 'deliveryTime',
      key: 'deliveryTime',
      render: (time) => new Date(time).toLocaleString(),
    },
    {
      title: 'Audio File Status',
      dataIndex: 'audioFileStatus',
      key: 'audioFileStatus',
    },
  ]

  const totalCalls = reports.length
  const successfulCalls = reports.filter(report => report.callStatus === 'Successful').length
  const successRate = (successfulCalls / totalCalls) * 100

  const chartData = {
    labels: ['Successful', 'Failed'],
    datasets: [
      {
        label: 'Delivery Status',
        data: [successfulCalls, totalCalls - successfulCalls],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Call Delivery Status',
      },
    },
  }

  const handleExport = (format) => {
    // Implement export functionality based on the selected format
    console.log(`Exporting in ${format} format`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Delivery Reports</h1>
        <RangePicker onChange={handleDateRangeChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card>
          <Statistic title="Total Calls Sent" value={totalCalls} />
        </Card>
        <Card>
          <Statistic title="Success Rate" value={successRate.toFixed(2)} suffix="%" />
        </Card>
        <Card>
          <Statistic title="Failed Deliveries" value={totalCalls - successfulCalls} />
        </Card>
      </div>

      <div className="mb-8">
        <Bar data={chartData} options={chartOptions} />
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Detailed Report</h2>
        <div>
          <Select defaultValue="pdf" style={{ width: 120, marginRight: 8 }}>
            <Option value="pdf">PDF</Option>
            <Option value="csv">CSV</Option>
            <Option value="excel">Excel</Option>
          </Select>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            onClick={() => handleExport('pdf')}
            style={{ backgroundColor: '#f15c22', borderColor: '#f15c22' }}
          >
            Export
          </Button>
        </div>
      </div>

      <Table columns={columns} dataSource={reports} rowKey="id" />
    </div>
  )
}

export default DeliveryReports