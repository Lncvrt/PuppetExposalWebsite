# Puppet Exposal Website

Puppet Raped/SA'd a 8 year old, and sexually harrased a 11 year old. This is a website dedicated to exposing puppet, and his info.

This website is a fork of my main website, and tweaked a little from the migration from html -> react. It is not perfect and has many issues, this is just to get the running with an api. I'm going to eventually rewrite the website to be easier to manage, look better, etc.

This is made to help people understand what puppet has done, and have him not do anything related to this again.

## Contributing/Questions

If you have any information on puppet, please make a pull request with the information you have, and add it to the site. If you have any questions, please make a issue.

## Self Hosting

If for some reason you want to self host this website, you will need to make a MySQL/MariaDB database and import [sql/youtube_archive.sql](youtube_archive.sql) file into it (using phpmyadmin or whatever you prefer), fill in data from your personal archive using a script, then copy .env.example to .env, and fill out the information

Running the website is really simple, here are the commands I use to run the website on pterodactyl panel:

### Production

```bash
npm i && npm run build && npm run start
```

### Development

```bash
npm i && npm run dev
```

###### If you're defending puppet, you have issues.
