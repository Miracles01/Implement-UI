const THANK = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#4f8901', // สีพื้นหลัง
    color: '#fff', // สีตัวอักษร
    fontFamily: 'Itim, sans-serif',
  };

  const headingStyle = {
    fontSize: '48px',
    textAlign: 'center',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // เงาของข้อความ
    marginBottom: '20px',
  };

  const subTextStyle = {
    fontSize: '24px',
    textAlign: 'center',
    color: '#fff',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h1 style={headingStyle}>Thank you for playing!</h1>
        <p style={subTextStyle}>We hope you enjoyed the game! Come back soon!</p>
      </div>
    </div>
  );
};

export default THANK;
