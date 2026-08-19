function App() {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Dashboard Saya</h1>
      <p>Halo, ini dashboard pertama yang saya bangun dari nol!</p>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        marginTop: '20px',
        maxWidth: '250px'
      }}>
        <h3>Total Penjualan</h3>
        <p style={{ fontSize: '28px', fontWeight: 'bold' }}>Rp 12.500.000</p>
      </div>
    </div>
  )
}

export default App