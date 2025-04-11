## 📦 Telegram Message Sender (By NahidHK)

এই প্রজেক্টটি `Telethon` লাইব্রেরি ব্যবহার করে Telegram API-এর মাধ্যমে স্বয়ংক্রিয়ভাবে বার্তা পাঠানোর একটি টুল।  
সাপোর্ট করে **Ubuntu** এবং **Termux (Android)** — উভয় প্ল্যাটফর্মেই।

---

## ⚙️ প্রযোজনীয়তা

- Python 3.x  
- Git  
- Telethon লাইব্রেরি  
- Telegram API ID & API Hash (https://my.telegram.org)

---

## 🧑‍💻 Ubuntu Setup Guide

### 1⃣ Git ইনস্টল করুন:

```bash
sudo apt update
sudo apt install git
```

### 2⃣ Python ও pip ইনস্টল করুন:

```bash
sudo apt install python3 python3-pip
```

### 3⃣ Telethon লাইব্রেরি ইনস্টল করুন:

```bash
pip3 install telethon
```

### 4⃣ প্রজেক্ট ক্লোন করুন:

```bash
git clone https://github.com/nahidhk/TGapi.git
cd TGapi
```

### 5⃣ API সেশন তৈরি (`api.py` চালান):

```bash
python3 api.py
```

- API ID দিন  
- API Hash দিন  
- মোবাইল নাম্বার দিন  
- Telegram OTP ও (যদি থাকে) 2FA password দিন  

### 6⃣ মেসেজ পাঠান (`loop.py` চালান):

```bash
python3 loop.py
```

- Username দিন  
- মেসেজ দিন  
- কয়বার পাঠাবেন (loop number) দিন  

---

## 📱 Termux Setup Guide (Android)

### 1⃣ আপডেট ও Python ইনস্টল:

```bash
pkg update
pkg install python git -y
```

### 2⃣ Telethon ইনস্টল:

```bash
pip install telethon
```

### 3⃣ প্রজেক্ট ক্লোন:

```bash
git clone https://github.com/nahidhk/TGapi.git
cd TGapi
```

### 4⃣ সেশন তৈরি:

```bash
python api.py
```

### 5⃣ মেসেজ পাঠানো:

```bash
python loop.py
```

---

## 📁 ফাইলসমূহ:

| ফাইল | কাজ |
|------|-----|
| `api.py` | Telegram সেশন তৈরি করে |
| `loop.py` | লুপ করে মেসেজ পাঠায় |
| `config.json` | API ID ও Hash সংরক্ষণ করে |
| `my_session.session` | Telegram লগইন সেশন ফাইল |

---

## 🤠 উদাহরণ ইনপুট:

```text
Input UserName: nahidhk
Input Message: I love you
Input Loop Number: 5
```

পাঠানো হবে:
``` text
I love you 1  
I love you 2  
I love you 3  
I love you 4  
I love you 5  
```

---

## 🙏 নোট

এই টুলটি **শিক্ষামূলক উদ্দেশ্যে** তৈরি।  
**স্প্যামিং বা অপব্যবহার করলে Telegram অ্যাকাউন্ট ব্যান হতে পারে। দয়া করে দায়িত্বশীলভাবে ব্যবহার করুন।**

---

## 👤 Developer

Made with ❤️ by **[@nahidhk](https://github.com/nahidhk)**