// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.active = true;
}

// Methods added to the BankAccount prototype
BankAccount.prototype.deposit = function(amount) {
  if (amount > 0) {
    this.balance += amount;
    console.log(`Deposited $${amount} into account ${this.accountNumber}.`);
  } else {
    console.log("Invalid deposit amount.");
  }
};

BankAccount.prototype.withdraw = function(amount) {
  if (this.balance >= amount && amount > 0) {
    this.balance -= amount;
    console.log(`Withdrawn $${amount} from account ${this.accountNumber}.`);
  } else {
    console.log("Insufficient funds or invalid withdrawal amount.");
  }
};

BankAccount.prototype.checkBalance = function() {
  console.log(`Account ${this.accountNumber} balance: $${this.balance}`);
};

BankAccount.prototype.isActive = function() {
  return this.active;
};

// Function to calculate total balance of all active accounts
function getTotalBalance(accounts) {
  let totalBalance = 0;
  accounts.forEach(account => {
    if (account.isActive()) {
      totalBalance += account.balance;
    }
  });
  return totalBalance;
}

// Creating multiple BankAccount objects
const account1 = new BankAccount(123456789, "John Doe", "Savings", 1000);
const account2 = new BankAccount(987654321, "Jane Smith", "Checking", 2000);

// Performing operations on accounts
account1.deposit(500);
account2.withdraw(100);
account1.checkBalance();
account2.checkBalance();

// Testing isActive method
console.log("Account 1 active:", account1.isActive());
console.log("Account 2 active:", account2.isActive());

// Testing getTotalBalance function
const accounts = [account1, account2];
console.log("Total balance of active accounts:", getTotalBalance(accounts));