
//not in use

const AdminJS = require('adminjs'); // AdminJS core
const AdminJSExpress = require('@adminjs/express'); // AdminJS Express adapter
const db = require('better-sqlite3')('ourApp.db'); // SQLite database connection

// Define your Post model for AdminJS
class Post {
  static table = 'posts'; // SQLite table name

  static fields = ['id', 'title', 'content', 'authorid', 'createdDate']; // Remove 'updated_at'

  // Fetch all posts from the database
  static find() {
    const statement = db.prepare('SELECT * FROM posts');
    return statement.all();
  }

  // Find a post by ID
  static findOne(id) {
    const statement = db.prepare('SELECT * FROM posts WHERE id = ?');
    return statement.get(id);
  }

  // Create a new post
  static create(data) {
    const statement = db.prepare(
      'INSERT INTO posts (title, content, authorid, createdDate) VALUES (?, ?, ?, ?)'
    );
    const result = statement.run(data.title, data.content, data.authorid, new Date().toISOString());
    return { ...data, id: result.lastInsertRowid };
  }

  // Update an existing post
  static update(id, data) {
    const statement = db.prepare(
      'UPDATE posts SET title = ?, content = ? WHERE id = ?'
    );
    statement.run(data.title, data.content, id);
    return { ...data, id };
  }

  // Delete a post
  static delete(id) {
    const statement = db.prepare('DELETE FROM posts WHERE id = ?');
    statement.run(id);
    return { id };
  }
}

// Initialize AdminJS
const adminJs = new AdminJS({
  resources: [
    {
      resource: Post, // Use Post model as a resource
      options: {
        listProperties: ['id', 'title', 'content', 'authorid', 'createdDate'], // Properties to show in the list
        editProperties: ['title', 'content'], // Fields editable in the form
        filterProperties: ['id', 'title'], // Fields that can be filtered
      },
    },
  ],
  rootPath: '/admin', // AdminJS panel will be at /admin
  branding: {
    companyName: 'My Company',
    logo: 'https://example.com/logo.png', // Add your logo if desired
  },
});

// Build the AdminJS router for Express
const adminRouter = AdminJSExpress.buildRouter(adminJs);

// Export AdminJS configuration and router
module.exports = {
  options: adminJs.options, // Export AdminJS options
  router: adminRouter, // Export the AdminJS router to be used in the main app
};
