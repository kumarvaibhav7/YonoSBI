package com.yono.yonosbi.yonocontroller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

import com.yono.yonosbi.model.Account;
import com.yono.yonosbi.model.Customer;
import com.yono.yonosbi.model.LoginCred;
import com.yono.yonosbi.model.branch;
import com.yono.yonosbi.model.creditapply;
import com.yono.yonosbi.model.trandetails;
import com.yono.yonosbi.repository.accountRepo;
import com.yono.yonosbi.repository.branchRepo;
import com.yono.yonosbi.repository.creditapplyRepo;
import com.yono.yonosbi.repository.customerRepo;
import com.yono.yonosbi.repository.logincredRepo;
import com.yono.yonosbi.repository.trandetailsRepo;

@RestController
@RequestMapping("/yonoSBI")
@CrossOrigin(origins = "http://localhost:4200")
public class yonoMainController {
	@Autowired
	branchRepo branchrepo;
	@Autowired
	logincredRepo logincredrepo;
	@Autowired
	customerRepo customerrepo;
	@Autowired
	accountRepo accountrepo;
	@Autowired
	trandetailsRepo trandetailsrepo;
	@Autowired
	creditapplyRepo creditapplyrepo;

  @GetMapping("/healthcheck")
	    public String healthcheck(){
	        return "ok"
	    }
	
	@GetMapping("/getyonobranches")
	    public List<branch> getallBranches(){
	        return  branchrepo.findAll();
	    }
	@GetMapping("/getunamepass")
	public List<LoginCred> getcredentials(){
		return logincredrepo.findAll();
	}
	
	@GetMapping("/getbranch/{id}")
	public Optional<branch> findbranch(@PathVariable Integer id) {
		return branchrepo.findById(id);
	}
	
	@PostMapping("/addcred")
	public void postcred(@RequestBody LoginCred logincred)
	{	
		logincredrepo.save(logincred);
	}
	
	@GetMapping("/getactiveuser/{id}")
	public List<String> getactiveuser(@PathVariable long id)
	{
		System.out.println(accountrepo.findActiveUser(id));
		return accountrepo.findActiveUser(id);
	}
	
	@GetMapping("/getactiveuserdetails/{id}")
	public Optional<Account> testing(@PathVariable long id)
	{
		return accountrepo.findById(id);
	}
	
	@PostMapping("/addtransaction")
	public void postTransaction(@RequestBody trandetails tranDetails)
	{
		trandetailsrepo.save(tranDetails);
	}
	
	@PutMapping("/modifybal/{senderid}/{recieverid}")
	public ResponseEntity<Account> modifybalance(@PathVariable long senderid, @PathVariable long recieverid,  @RequestBody Account modifiedacc) {
		Account senderAccount=accountrepo.findById(senderid).orElseThrow(() -> new ResourceAccessException("Account not found using sender id : " + senderid));
		Account recieverAccount=accountrepo.findById(recieverid).orElseThrow(() -> new ResourceAccessException("Account not found using reciever id : " + recieverid));
		recieverAccount.setBalance(recieverAccount.getBalance()+(senderAccount.getBalance()-modifiedacc.getBalance()));
		senderAccount.setBalance(modifiedacc.getBalance());
		accountrepo.save(senderAccount);
		accountrepo.save(recieverAccount);
		return ResponseEntity.ok(recieverAccount);
	}
	
	@GetMapping("/gettransaction/{id}")
	public List<trandetails> gettransactions(@PathVariable long id){
		return trandetailsrepo.getTranDetails(id);
	}
	
	@PostMapping("/postrequest/{acnum}")
	public void postreq(@PathVariable Integer acnum,@RequestBody creditapply creditapply) {
		System.out.println(acnum);
		creditapply.setApproval("Pending");
		creditapplyrepo.save(creditapply);
	}
	
	@GetMapping("getCountDetails/{acnum}")
	public Integer getcount(@PathVariable Integer acnum) {
		System.out.println("called getcount");
		return creditapplyrepo.getCountacnum(acnum);
	}
	
	@PutMapping("putbranch/{acnum}")
	public ResponseEntity<Account> putbranch(@PathVariable Long acnum , @RequestBody Account account){
		System.out.println(account);
		Account accountToModify=accountrepo.findById(acnum).orElseThrow(() -> new ResourceAccessException("Account not found using sender id : " + acnum));
		accountToModify.setBid(account.getBid());
		accountrepo.save(accountToModify);
		return ResponseEntity.ok(accountToModify);
	}
	
	@GetMapping("getreqdetails/{acnum}")
	public Optional<creditapply> getReqdetails(@PathVariable Integer acnum) {
		return creditapplyrepo.getDeatils(acnum);
	}
	
	@GetMapping("/getcustomers")
	public List<Customer> getcustomers(){
		return customerrepo.findAll();
	}
}
