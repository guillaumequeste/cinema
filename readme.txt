"react-helmet": "^5.2.1",
"react-router-dom": "^5.1.2"

En production, mettre à la racine un fichier ".htaccess" pour tout rediriger vers "index.html" :

RewriteEngine On
RewriteBase /
RewriteRule ^index.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]