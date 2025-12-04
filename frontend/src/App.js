// Main Application
class UniccastApp {
    constructor() {
        this.currentPage = 'dashboard';
        this.init();
    }

    init() {
        this.renderApp();
        this.setupEventListeners();
        this.loadDashboardData();
    }

    renderApp() {
        const appContainer = document.getElementById('app');
        appContainer.innerHTML = `
            <div class="app-container">
                ${this.renderSidebar()}
                <div class="main-content">
                    ${this.renderHeader()}
                    <div id="page-content"></div>
                </div>
            </div>
        `;
    }

    renderSidebar() {
        return `
            <div class="sidebar">
                <div class="sidebar-logo">
                    <span>U</span>
                    <div>Unicast</div>
                </div>
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a class="nav-link active" onclick="app.navigateTo('dashboard')">
                            📊 Dashboard
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="app.navigateTo('attendance')">
                            📋 Attendance
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="app.navigateTo('messaging')">
                            💬 Messaging
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="app.navigateTo('analytics')">
                            📈 Analytics
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="app.navigateTo('users')">
                            👥 Users
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" onclick="app.navigateTo('settings')">
                            ⚙️ Settings
                        </a>
                    </li>
                </ul>
            </div>
        `;
    }

    renderHeader() {
        return `
            <div class="header">
                <h1 id="page-title">Dashboard</h1>
                <div class="header-actions">
                    <input type="text" class="search-box" placeholder="Search...">
                    <button class="btn btn-primary" onclick="app.showAddModal()">+ Add New</button>
                </div>
            </div>
        `;
    }

    loadDashboardData() {
        const pageContent = document.getElementById('page-content');
        pageContent.innerHTML = `
            <div class="dashboard-grid">
                <div class="stat-card">
                    <div class="stat-label">Total Users</div>
                    <div class="stat-value">1,248</div>
                    <div class="stat-change">+12% from last month</div>
                </div>
                <div class="stat-card success">
                    <div class="stat-label">Active Sessions</div>
                    <div class="stat-value">856</div>
                    <div class="stat-change">+5% from last week</div>
                </div>
                <div class="stat-card warning">
                    <div class="stat-label">Pending Tasks</div>
                    <div class="stat-value">42</div>
                    <div class="stat-change negative">-8% from last week</div>
                </div>
                <div class="stat-card danger">
                    <div class="stat-label">System Issues</div>
                    <div class="stat-value">3</div>
                    <div class="stat-change">No change from last week</div>
                </div>
            </div>

            <div class="table-container">
                <div class="table-header">
                    <h2>Recent Attendance</h2>
                    <button class="btn btn-secondary" onclick="app.navigateTo('attendance')">View All</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Date</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Dec 4, 2025</td>
                            <td>09:00 AM</td>
                            <td>05:30 PM</td>
                            <td><span class="status-badge status-active">Present</span></td>
                            <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button></td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>Dec 4, 2025</td>
                            <td>09:15 AM</td>
                            <td>05:45 PM</td>
                            <td><span class="status-badge status-active">Present</span></td>
                            <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button></td>
                        </tr>
                        <tr>
                            <td>Mike Johnson</td>
                            <td>Dec 4, 2025</td>
                            <td>-</td>
                            <td>-</td>
                            <td><span class="status-badge status-inactive">Absent</span></td>
                            <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button></td>
                        </tr>
                        <tr>
                            <td>Sarah Williams</td>
                            <td>Dec 4, 2025</td>
                            <td>10:30 AM</td>
                            <td>-</td>
                            <td><span class="status-badge status-pending">In Progress</span></td>
                            <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="table-container">
                <div class="table-header">
                    <h2>Recent Messages</h2>
                    <button class="btn btn-secondary" onclick="app.navigateTo('messaging')">View All</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Message</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Admin</td>
                            <td>All Users</td>
                            <td>System maintenance scheduled for tonight...</td>
                            <td>Dec 4, 2025 02:30 PM</td>
                            <td><span class="status-badge status-active">Sent</span></td>
                        </tr>
                        <tr>
                            <td>HR Department</td>
                            <td>Team Leads</td>
                            <td>Please submit monthly reports by Friday...</td>
                            <td>Dec 4, 2025 10:15 AM</td>
                            <td><span class="status-badge status-active">Sent</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    loadAttendancePage() {
        const pageContent = document.getElementById('page-content');
        pageContent.innerHTML = `
            <div class="attendance-section">
                <h2 style="margin-bottom: 20px;">Attendance Management</h2>
                <form class="attendance-form" onsubmit="app.handleAttendanceSubmit(event)">
                    <div class="form-group">
                        <label>User</label>
                        <select required>
                            <option>Select User</option>
                            <option>John Doe</option>
                            <option>Jane Smith</option>
                            <option>Mike Johnson</option>
                            <option>Sarah Williams</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Date</label>
                        <input type="date" required>
                    </div>
                    <div class="form-group">
                        <label>Time In</label>
                        <input type="time" required>
                    </div>
                    <div class="form-group">
                        <label>Time Out</label>
                        <input type="time" required>
                    </div>
                </form>
                <button class="btn btn-primary" onclick="app.handleAttendanceSubmit()">Submit Attendance</button>
            </div>

            <div class="table-container" style="margin-top: 30px;">
                <div class="table-header">
                    <h2>All Attendance Records</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Date</th>
                            <th>Time In</th>
                            <th>Time Out</th>
                            <th>Duration</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>Dec 4, 2025</td>
                            <td>09:00 AM</td>
                            <td>05:30 PM</td>
                            <td>8h 30m</td>
                            <td><span class="status-badge status-active">Present</span></td>
                            <td>
                                <button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button>
                                <button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>Dec 3, 2025</td>
                            <td>09:15 AM</td>
                            <td>05:45 PM</td>
                            <td>8h 30m</td>
                            <td><span class="status-badge status-active">Present</span></td>
                            <td>
                                <button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button>
                                <button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    loadMessagingPage() {
        const pageContent = document.getElementById('page-content');
        pageContent.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 30px;">
                <h2 style="margin-bottom: 20px;">Send Message</h2>
                <form onsubmit="app.handleMessageSubmit(event)">
                    <div class="form-group">
                        <label>Recipients</label>
                        <select required>
                            <option>Select Recipients</option>
                            <option>All Users</option>
                            <option>Team Leads</option>
                            <option>Departments</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Subject</label>
                        <input type="text" placeholder="Message subject" required>
                    </div>
                    <div class="form-group">
                        <label>Message</label>
                        <textarea placeholder="Type your message here..." rows="6" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>

            <div class="table-container">
                <div class="table-header">
                    <h2>Message History</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>From</th>
                            <th>To</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Admin</td>
                            <td>All Users</td>
                            <td>System maintenance scheduled...</td>
                            <td>Dec 4, 2025</td>
                            <td><span class="status-badge status-active">Sent</span></td>
                            <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">View</button></td>
                        </tr>
                        <tr>
                            <td>HR</td>
                            <td>Team Leads</td>
                            <td>Monthly report submission</td>
                            <td>Dec 3, 2025</td>
                            <td><span class="status-badge status-active">Sent</span></td>
                            <td><button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">View</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    loadAnalyticsPage() {
        const pageContent = document.getElementById('page-content');
        pageContent.innerHTML = `
            <div class="dashboard-grid">
                <div class="stat-card">
                    <div class="stat-label">Total Attendance Rate</div>
                    <div class="stat-value">94.5%</div>
                    <div class="stat-change">+2% from last month</div>
                </div>
                <div class="stat-card success">
                    <div class="stat-label">Messages Sent</div>
                    <div class="stat-value">1,523</div>
                    <div class="stat-change">+34% from last month</div>
                </div>
                <div class="stat-card warning">
                    <div class="stat-label">Active Users</div>
                    <div class="stat-value">892</div>
                    <div class="stat-change">+15% from last month</div>
                </div>
            </div>

            <div class="chart-container">
                <h2 style="margin-bottom: 20px;">Attendance Trend (Last 7 Days)</h2>
                <div style="height: 300px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;">
                    <p style="font-size: 18px;">Chart placeholder - integrate with Chart.js or similar</p>
                </div>
            </div>

            <div class="chart-container">
                <h2 style="margin-bottom: 20px;">User Activity Distribution</h2>
                <div style="height: 300px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white;">
                    <p style="font-size: 18px;">Chart placeholder - integrate with Chart.js or similar</p>
                </div>
            </div>

            <div class="table-container">
                <div class="table-header">
                    <h2>Daily Attendance Summary</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Total Users</th>
                            <th>Present</th>
                            <th>Absent</th>
                            <th>Late</th>
                            <th>Attendance Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dec 4, 2025</td>
                            <td>250</td>
                            <td>235</td>
                            <td>10</td>
                            <td>5</td>
                            <td>94%</td>
                        </tr>
                        <tr>
                            <td>Dec 3, 2025</td>
                            <td>250</td>
                            <td>240</td>
                            <td>8</td>
                            <td>2</td>
                            <td>96%</td>
                        </tr>
                        <tr>
                            <td>Dec 2, 2025</td>
                            <td>250</td>
                            <td>238</td>
                            <td>9</td>
                            <td>3</td>
                            <td>95.2%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    loadUsersPage() {
        const pageContent = document.getElementById('page-content');
        pageContent.innerHTML = `
            <div class="table-container">
                <div class="table-header">
                    <h2>User Management</h2>
                    <button class="btn btn-primary" onclick="app.showAddUserModal()">+ Add User</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Department</th>
                            <th>Status</th>
                            <th>Joined Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>Employee</td>
                            <td>IT</td>
                            <td><span class="status-badge status-active">Active</span></td>
                            <td>Jan 15, 2025</td>
                            <td>
                                <button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button>
                                <button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>jane@example.com</td>
                            <td>Manager</td>
                            <td>HR</td>
                            <td><span class="status-badge status-active">Active</span></td>
                            <td>Feb 20, 2025</td>
                            <td>
                                <button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button>
                                <button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Mike Johnson</td>
                            <td>mike@example.com</td>
                            <td>Employee</td>
                            <td>Finance</td>
                            <td><span class="status-badge status-inactive">Inactive</span></td>
                            <td>Mar 10, 2025</td>
                            <td>
                                <button class="btn btn-secondary" style="padding: 5px 10px; font-size: 12px;">Edit</button>
                                <button class="btn btn-danger" style="padding: 5px 10px; font-size: 12px;">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    loadSettingsPage() {
        const pageContent = document.getElementById('page-content');
        pageContent.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); max-width: 600px;">
                <h2 style="margin-bottom: 30px;">System Settings</h2>

                <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px; font-size: 16px;">General Settings</h3>
                    <div class="form-group">
                        <label>System Name</label>
                        <input type="text" value="Unicast Management System">
                    </div>
                    <div class="form-group">
                        <label>System Email</label>
                        <input type="email" value="admin@unicast.com">
                    </div>
                </div>

                <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 20px; margin-bottom: 20px;">
                    <h3 style="margin-bottom: 15px; font-size: 16px;">Notification Settings</h3>
                    <div class="form-group">
                        <label>
                            <input type="checkbox" checked> Enable Email Notifications
                        </label>
                    </div>
                    <div class="form-group">
                        <label>
                            <input type="checkbox" checked> Enable System Alerts
                        </label>
                    </div>
                </div>

                <div>
                    <h3 style="margin-bottom: 15px; font-size: 16px;">Security Settings</h3>
                    <div class="form-group">
                        <label>Session Timeout (minutes)</label>
                        <input type="number" value="30">
                    </div>
                    <button class="btn btn-primary">Save Settings</button>
                </div>
            </div>
        `;
    }

    navigateTo(page) {
        this.currentPage = page;
        document.getElementById('page-title').textContent = this.getPageTitle(page);
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        event.target.classList.add('active');

        switch(page) {
            case 'dashboard':
                this.loadDashboardData();
                break;
            case 'attendance':
                this.loadAttendancePage();
                break;
            case 'messaging':
                this.loadMessagingPage();
                break;
            case 'analytics':
                this.loadAnalyticsPage();
                break;
            case 'users':
                this.loadUsersPage();
                break;
            case 'settings':
                this.loadSettingsPage();
                break;
        }
    }

    getPageTitle(page) {
        const titles = {
            dashboard: 'Dashboard',
            attendance: 'Attendance Management',
            messaging: 'Messaging',
            analytics: 'Analytics & Reports',
            users: 'User Management',
            settings: 'Settings'
        };
        return titles[page] || 'Dashboard';
    }

    showAddModal() {
        alert('Add New feature - Implement modal form here');
    }

    showAddUserModal() {
        alert('Add User - Implement user creation modal here');
    }

    handleAttendanceSubmit(event) {
        if(event) event.preventDefault();
        alert('Attendance record submitted successfully!');
    }

    handleMessageSubmit(event) {
        event.preventDefault();
        alert('Message sent successfully!');
    }

    setupEventListeners() {
        // Additional event listeners can be added here
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', function() {
    app = new UniccastApp();
});