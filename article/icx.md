আপনার কোড প্রায় ঠিকই আছে, কিন্তু কয়েকটি জিনিস ঠিক করতে হবে:  

### **সমস্যা ও সমাধান:**  
1. **`marked.js` লোড করা হয়নি:**  
   - আপনার কোডে `marked.js` লাইব্রেরি নেই, তাই এটি কাজ করবে না।  
   - এটি যোগ করুন:  
   ```html
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   ```

2. **URL-এ `file` প্যারামিটার না থাকলে `fetch` হবে না:**  
   - যদি `file` প্যারামিটার না থাকে, তাহলে `fetch` করা উচিত নয়।  

---

### **আপডেট করা কোড:**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/src/style/style.css" type="text/css" media="all" />
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title of WiKi</title>
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
</head>
<body>
   <div class="flex nav anaround">
       <div class="blockqut">
           <h1>ICX WiKi</h1>
       </div>
   </div>

   <br><br><br><br><br><br>

   <div id="content">Loading...</div>

   <script>
    function getFilenameFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('file'); 
    }

    const filename = getFilenameFromUrl();
    
    if (filename) {
        fetch('/article/' + filename)
            .then(response => {
                if (!response.ok) {
                    throw new Error('File not found');
                }
                return response.text();
            })
            .then(markdown => {
                document.getElementById('content').innerHTML = marked.parse(markdown);
            })
            .catch(error => {
                console.error('Error loading Markdown file:', error);
                document.getElementById('content').innerHTML = "<p style='color: red;'>Error loading file.</p>";
            });
    } else {
        document.getElementById('content').innerHTML = "<p style='color: red;'>No file specified in URL.</p>";
    }
   </script>
</body>
</html>
```

---

### **পরিবর্তন যা করা হয়েছে:**  
✅ **`marked.js` লাইব্রেরি যোগ করা হয়েছে।**  
✅ **`file` প্যারামিটার না থাকলে এরর দেখাবে।**  
✅ **`fetch` ত্রুটি হ্যান্ডলিং করা হয়েছে।**  

এখন আপনার কোড ঠিকভাবে **Markdown ফাইল লোড করে HTML-এ দেখাবে!** 😊🚀