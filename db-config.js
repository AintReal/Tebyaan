// Database Configuration (public anon key is expected on the client for read/write per current setup)
const DB_CONFIG = {
    url: 'https://eyovsybbrwrcppgnylqa.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5b3ZzeWJicndyY3BwZ255bHFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5MTYyMDIsImV4cCI6MjA3NzQ5MjIwMn0.oSFtJ1bBqdK4uffvfZtSgeZ3B2Q8tfolZilOnfZQHXg'
};


const TABLE_NAME = 'webNews';


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DB_CONFIG, TABLE_NAME };
} else {
    window.DB_CONFIG = DB_CONFIG;
    window.TABLE_NAME = TABLE_NAME;
} 