erDiagram
    User ||--o{ Agents : "has"
    User ||--o{ Bill : "has"
    User ||--o{ Subscription : "has"
    Agents ||--o{ Bill : "generates"
    Agents ||--o{ Subscription : "has"
    Agent_Type ||--o{ Agents : "categorizes"
    
    User {
        int id PK "autoincrement"
        datetime createdAt "default(now())"
        string name "default('User')"
    }
    
    Agents {
        int id PK "autoincrement"
        string name
        string purpose
        boolean live "default(false)"
        int cost
        string agent_type FK "references Agent_Type.type"
    }
    
    Agent_Type {
        int id PK "autoincrement"
        string type UK "unique"
        datetime createdAt "default(now())"
        datetime updatedAt "@updatedAt"
        int agent_price UK "unique"
    }
    
    Bill {
        int id PK "autoincrement"
        int userId FK "references User.id"
        int agentId FK "references Agents.id"
        int price
        datetime createdAt "default(now())"
    }
    
    Subscription {
        int id PK "autoincrement"
        int userId FK "references User.id"
        int agentId FK "references Agents.id"
        enum type "MONTHLY/YEARLY"
        datetime startDate "default(now())"
        datetime expiryDate
    }