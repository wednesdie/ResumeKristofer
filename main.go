package main

import (
	"database/sql" // For SQL database interaction
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"time"

	// "strconv"

	_ "github.com/go-sql-driver/mysql" // Blank import for MySQL driver
)

type Users struct {
	ip         string `json:"ip"`
	userAggent string `json:"user_aggent"`
	timestamp  string `json:"timestamp"`
}

var db *sql.DB

func main() {
	var err error
	// Data Source Name (DSN) for MySQL connection.
	// Ensure the 'test' database exists and user 'root' with password 'sihombing321' has access.
	dsn := "root:123@tcp(172.17.0.134)/test"
	db, err = sql.Open("mysql", dsn)
	if err != nil {
		// Using log.Fatalf to stop the program if database connection fails.
		log.Fatalf("Failed to connect to database: %v", err)
	}

	// Verify database connection by pinging it.
	if err := db.Ping(); err != nil {
		log.Fatalf("Cannot connect to database: %v", err)
	}
	fmt.Println("Successfully connected to MySQL!")

	// Ensure the database connection is closed when the program exits.
	defer db.Close()
	// Menyiapkan handler untuk file statis (seperti index.html)
	// http.FileServer akan melayani file dari direktori saat ini
	// http.Handle("/", http.FileServer(http.Dir("."))) // Jika index.html langsung di root
	// Lebih baik menggunakan ServeMux untuk pemisahan routing yang jelas
	mux := http.NewServeMux()

	// Melayani index.html sebagai root
	// http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
	// 	http.ServeFile(w, r, "index.html")
	// })
	// Atau lebih umum:
	mux.HandleFunc("/index", func(w http.ResponseWriter, r *http.Request) {
		// if r.URL.Path != "/" {
		// 	http.NotFound(w, r) // Hanya layani "/" sebagai index.html
		// 	return
		// }
		http.ServeFile(w, r, "index.html")
	})

	// Menghubungkan endpoint API dengan handler fungsi
	// mux.HandleFunc("/api/provinces", getProvincesHandler)
	mux.HandleFunc("/api/users", getUserHandler)

	// Menjalankan server di port 8080
	port := 8080
	fmt.Printf("Server berjalan di http://localhost:%d\n", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), mux))
}

func getUserHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	// w.Header().Set("Access-Control-Allow-Origin", "*")

	usersdata, err := GetUsers(db, w, r)
	if err != nil {
		panic((err))
	}
	// Meng-encode slice cities menjadi JSON dan menulisnya ke response
	if err := json.NewEncoder(w).Encode(usersdata); err != nil {
		log.Printf("Error encoding response: %v", err)
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
	}
}

func GetUsers(db *sql.DB, w http.ResponseWriter, r *http.Request) (Users, error) {
	var user Users

	host, _, err := net.SplitHostPort(r.RemoteAddr)
	if err != nil {
		log.Printf("Error splitting RemoteAddr: %v", err)
		// Handle error, mungkin set IP ke string kosong atau kembalikan error ke klien
		user.ip = "unknown"
	} else {
		user.ip = host // Ini adalah IP address-nya
	}

	user.userAggent = r.Header.Get("User-Aggent")
	user.timestamp = time.Now().Format("2006-01-02 15:04:05") // <-- INI YANG BENAR

	_, err = db.Exec("INSERT INTO log_users(ip_address, user_agent, timestamp) VALUES (?,?,?)", user.ip, user.userAggent, user.timestamp)
	if err != nil {
		// Other errors during query or scanning.
		log.Print("database query error: %w", err)
		return Users{}, fmt.Errorf("failed to insert user hit: %w", err) // <-- PASTI ADA RETURN INI UNTUK ERROR
	}
	// defer rows.Close()

	// fmt.Printf
	// fmt.Printf("Users hit successfully!")
	return user, nil
}
