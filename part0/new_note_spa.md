```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST [https://fullstack-exampleapp.herokuapp.com/new_note_spa]
    activate server
    server-->>browser: HTML document 201 Created
    deactivate server
```
