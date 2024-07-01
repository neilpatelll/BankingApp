package com.example.bankingapp.service;

import com.example.bankingapp.model.Account;
import com.example.bankingapp.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public Account getAccount(Long id) {
        return accountRepository.findById(id).orElse(null);
    }

    public Account createAccount(Account account) {
        return accountRepository.save(account);
    }

    public Account deposit(Long id, BigDecimal amount) {
        Account account = getAccount(id);
        if (account != null) {
            account.setBalance(account.getBalance().add(amount));
            return accountRepository.save(account);
        }
        return null;
    }

    public Account withdraw(Long id, BigDecimal amount) {
        Account account = getAccount(id);
        if (account != null && account.getBalance().compareTo(amount) >= 0) {
            account.setBalance(account.getBalance().subtract(amount));
            return accountRepository.save(account);
        }
        return null;
    }
}
