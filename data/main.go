package main

import (
    "io/ioutil"
    "net/http"
    "log"
    "encoding/json"
)

type IPResponse struct {
    IP string `json:"ip"`
}

func getIP() string {
    res, err := http.Get("https://api.ipify.org?format=text")
    if err != nil {
        log.Fatal(err)
    }
    defer res.Body.Close()

    ip, err := ioutil.ReadAll(res.Body)
    if err != nil {
        log.Fatal(err)
    }

    return string(ip)
}

func handler(w http.ResponseWriter, r *http.Request) {
    ip := getIP()
    response := IPResponse{IP: ip}

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(response)
}

func main() {
    http.HandleFunc("format=json", handler)
    log.Println("Server running on http://api.ipify.org?")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
