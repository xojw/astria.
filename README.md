<p align="center">
  <img src="./banner.png" alt="Logo">
</p>

<p align="center" style="font-weight: bold; color: purple;">
  testing repository 🐉
</p>

---
---

# Setting Ulrua up on a server:

> [!NOTE] 
> You need a subdomain or a domain for this.

1. Log in to your server.
2. Open your server terminal.
3. Run the commands below:

```bash
sudo git clone https://github.com/xojw/astria.

sh setup.sh
```

---
---

# Setting up Ulrua on Github Codespaces:

If you don't already have a Github account create one!

1. If you already have an account or just created one, scroll up and click the green “Code” button.
2. On the right, select “Codespaces.”
3. Click the ”+” button to create a new Codespace for this project.
4. After everything loads run the commands bellow:

```bash
npm install express

sudo npm install pm2 -g

pm2 start index.mjs
```

When the process completes, a pop-up will appear. Click ‘Public’ to proceed.

---
---

> [!IMPORTANT]
> Bye.
