var cvv22;
firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
         document.getElementsByTagName("body")[0].style.display = "none"
        window.location = "login.html";
    } else {



            //Adding cards to the add money modal
            const addmoney = document.querySelector("#addmoneycards");



            function allccards(doc){
                //Credit cards

                let mainDiv = document.createElement('div');
                mainDiv.className = "form-check"


                let input = document.createElement('input');
                input.className = "form-check-input"
                input.type = "radio"
                input.style.cssText = "margin-left: 2px"

                let label = document.createElement('label');
                label.className = "form-check-label"

                let outerDiv = document.createElement('div');
              outerDiv.className = "card";
              outerDiv.style.cssText = 'margin: 10px 0px';

              let headerDiv = document.createElement('div');
              headerDiv.className = "card-header";
              headerDiv.style.cssText = 'letter-spacing: 5px;font-size: larger;';

              let bodyDiv = document.createElement('div');
              bodyDiv.className = "card-body";
              bodyDiv.style.cssText = 'color: black;text-align: left;';

              let icon = document.createElement('i');
              icon.className = "fa fa-credit-card";

              let cross = document.createElement('div');
              cross.style.cssText = 'float: right';


              let name = document.createElement('h6');
              name.className = 'card-title';

              let cardno = document.createElement('h6');
              cardno.className = 'card-title';

              let expr = document.createElement('h6');
              expr.className = 'card-title';

              let cvv = document.createElement('input');
              cvv.className = "form-control ipcvv"
              cvv.type = "text"

              input.setAttribute('data-id', doc.id);
              mainDiv.setAttribute('data-id', doc.id);
              input.setAttribute('name', "cards");
              input.setAttribute('required',"required")
              cvv.setAttribute("onkeypress","return /[0-9]/i.test(event.key)")
              cvv.setAttribute("maxLength","3")
              cvv.setAttribute("minLength","3")
              cvv.setAttribute("placeholder","Enter CVV")



              name.innerHTML = " <strong>NAME : </strong>" + doc.data().cardname;
              cardno.innerHTML = " <strong>CARD NO. : </strong>"+doc.data().cardno;
              expr.innerHTML =  " <strong>EXPIRY DATE : </strong>" + doc.data().expr;


              mainDiv.appendChild(input)
              mainDiv.appendChild(label)
              label.appendChild(outerDiv)
              outerDiv.appendChild(headerDiv);
              outerDiv.appendChild(bodyDiv);
              headerDiv.appendChild(icon);
              headerDiv.appendChild(cross);
              bodyDiv.appendChild(name);
              bodyDiv.appendChild(cardno);
              bodyDiv.appendChild(expr);
              bodyDiv.appendChild(cvv);
              addmoney.appendChild(mainDiv);
          }

          function alldcards(doc){

              //Debit cards
              let mainDiv = document.createElement('div');
                mainDiv.className = "form-check"

                let input = document.createElement('input');
                input.className = "form-check-input"
                input.type = "radio"
                input.style.cssText = "margin-left: 2px"

                let label = document.createElement('label');
                label.className = "form-check-label"

                let outerDiv = document.createElement('div');
              outerDiv.className = "card";
              outerDiv.style.cssText = 'margin: 10px 0px';

              let headerDiv = document.createElement('div');
              headerDiv.className = "card-header";
              headerDiv.style.cssText = 'letter-spacing: 5px;font-size: larger;';

              let bodyDiv = document.createElement('div');
              bodyDiv.className = "card-body";
              bodyDiv.style.cssText = 'color: black;text-align: left;';

              let icon = document.createElement('i');
              icon.className = "fa fa-university";

              let cross = document.createElement('div');
              cross.style.cssText = 'float: right';


              let name = document.createElement('h6');
              name.className = 'card-title';

              let cardno = document.createElement('h6');
              cardno.className = 'card-title';

              let expr = document.createElement('h6');
              expr.className = 'card-title';

              let cvv = document.createElement('input');
              cvv.className = "form-control ipcvv"
              cvv.type = "text"

              input.setAttribute('data-id', doc.id);
              mainDiv.setAttribute('data-id', doc.id);
              input.setAttribute('name', "cards");
              input.setAttribute('required',"required")
              cvv.setAttribute("onkeypress","return /[0-9]/i.test(event.key)")
              cvv.setAttribute("maxLength","3")
              cvv.setAttribute("minLength","3")
              cvv.setAttribute("placeholder","Enter CVV")


              name.innerHTML = " <strong>NAME : </strong>" + doc.data().cardname;
              cardno.innerHTML = " <strong>CARD NO. : </strong>"+doc.data().cardno;
              expr.innerHTML =  " <strong>EXPIRY DATE : </strong>" + doc.data().expr;


              mainDiv.appendChild(input)
              mainDiv.appendChild(label)
              label.appendChild(outerDiv)
              outerDiv.appendChild(headerDiv);
              outerDiv.appendChild(bodyDiv);
              headerDiv.appendChild(icon);
              headerDiv.appendChild(cross);
              bodyDiv.appendChild(name);
              bodyDiv.appendChild(cardno);
              bodyDiv.appendChild(expr);
              bodyDiv.appendChild(cvv);
              addmoney.appendChild(mainDiv);
            }


            //Adding cards from DB
            const newcard = document.querySelector('#newcard');


          function renderCard(doc){
              let outerDiv = document.createElement('div');
              outerDiv.className = "card";
              outerDiv.style.cssText = 'margin: 10px 0px';

              let headerDiv = document.createElement('div');
              headerDiv.className = "card-header";
              headerDiv.style.cssText = 'letter-spacing: 5px;font-size: larger;';

              let bodyDiv = document.createElement('div');
              bodyDiv.className = "card-body";
              bodyDiv.style.cssText = 'color: black';

              let icon = document.createElement('i');
              icon.className = "fa fa-credit-card";

              let cross = document.createElement('div');
              cross.style.cssText = 'float: right';

              let icon2 = document.createElement('i');
              icon2.className = "fa fa-trash-alt"
              icon2.style.cssText = 'color: red;font-size: x-large;';

              let name = document.createElement('h6');
              name.className = 'card-title';

              let cardno = document.createElement('h6');
              cardno.className = 'card-title';

              let expr = document.createElement('h6');
              expr.className = 'card-title';

              outerDiv.setAttribute('data-id', doc.id);

              name.innerHTML = " <strong>NAME : </strong>" + doc.data().cardname;
              cardno.innerHTML = " <strong>CARD NO. : </strong>"+doc.data().cardno;
              expr.innerHTML =  " <strong>EXPIRY DATE : </strong>" + doc.data().expr;


              outerDiv.appendChild(headerDiv);
              outerDiv.appendChild(bodyDiv);
              headerDiv.appendChild(icon);
              cross.appendChild(icon2);
              headerDiv.appendChild(cross);
              bodyDiv.appendChild(name);
              bodyDiv.appendChild(cardno);
              bodyDiv.appendChild(expr);
              newcard.appendChild(outerDiv);


              //Deleting cards

              cross.addEventListener('click',(e) => {
                  e.stopPropagation();
                  let temp1 = e.target.parentElement;
                  let temp2 = temp1.parentElement;
                  let id = temp2.parentElement.getAttribute('data-id');
                  db.collection('users').doc(user.uid).collection('wallet').get().then(docs1 =>{
                      docs1.forEach(doc1 => {
                          docid1 = doc1.id
                          db.collection('users').doc(user.uid).collection('wallet').doc(docid1).get().then( doc => {
                                db.collection('users').doc(user.uid).collection('wallet').doc(docid1).collection('cards').doc(id).delete();
                          })
                      })
                  })
                  document.getElementById("deletedcard").style.display = "block";
                  $('#deletedcard').delay(3000).fadeOut('slow');
              })

          }

          //Adding accounts from DB
          const newaccount = document.querySelector('#newaccount');
          function renderAccount(doc){
              let outerDiv = document.createElement('div');
              outerDiv.className = "card";
              outerDiv.style.cssText = 'margin: 10px 0px';

              let headerDiv = document.createElement('div');
              headerDiv.className = "card-header";
              headerDiv.style.cssText = 'letter-spacing: 5px;font-size: larger;';

              let bodyDiv = document.createElement('div');
              bodyDiv.className = "card-body";
              bodyDiv.style.cssText = 'color: black';

              let icon = document.createElement('i');
              icon.className = "fa fa-university";

              let cross = document.createElement('div');
              cross.style.cssText = 'float: right';

              let icon2 = document.createElement('i');
              icon2.className = "fa fa-trash-alt"
              icon2.style.cssText = 'color: red;font-size: x-large;';

              let name = document.createElement('h6');
              name.className = 'card-title';

              let cardno = document.createElement('h6');
              cardno.className = 'card-title';

              let expr = document.createElement('h6');
              expr.className = 'card-title';

              outerDiv.setAttribute('data-id', doc.id);

              name.innerHTML = " <strong>NAME : </strong>" + doc.data().cardname;
              cardno.innerHTML = " <strong>CARD NO. : </strong>"+doc.data().cardno;
              expr.innerHTML =  " <strong>EXPIRY DATE : </strong>" + doc.data().expr;


              outerDiv.appendChild(headerDiv);
              outerDiv.appendChild(bodyDiv);
              headerDiv.appendChild(icon);
              cross.appendChild(icon2);
              headerDiv.appendChild(cross);
              bodyDiv.appendChild(name);
              bodyDiv.appendChild(cardno);
              bodyDiv.appendChild(expr);
              newaccount.appendChild(outerDiv);

              //Removing accounts

              cross.addEventListener('click',(e) => {
                  e.stopPropagation();
                  let temp1 = e.target.parentElement;
                  let temp2 = temp1.parentElement;
                  let id = temp2.parentElement.getAttribute('data-id');
                  db.collection('users').doc(user.uid).collection('wallet').get().then(docs1 =>
                    {
                      docs1.forEach( doc1 => {
                          docid1 = doc1.id
                          db.collection('users').doc(user.uid).collection('wallet').doc(docid1).get().then( doc => {
                                db.collection('users').doc(user.uid).collection('wallet').doc(docid1).collection('accounts').doc(id).delete();
                          })
                      })
                  })
                  document.getElementById("deletedaccount").style.display = "block";
                  $('#deletedaccount').delay(3000).fadeOut('slow');
              })

          }


          //Filling wallet with user details



          db.collection('users').doc(user.uid).get().then(doc => {
              document.getElementById('walletun').innerHTML = doc.data().name;
        })
        document.getElementById("currentemail").innerHTML = firebase.auth().currentUser.email;


        db.collection('users').doc(user.uid).collection('wallet').doc('wallet').update({balance: firebase.firestore.FieldValue.increment(0)});
        db.collection('users').doc(user.uid).collection('wallet').get().then(docs1 =>{
                db.collection('users').doc(user.uid).collection('wallet').doc('wallet').get().then( doc => {
                    // if(document.getElementById('walletm').innerHTML == 0){
                    // 	document.getElementById('walletm').innerHTML = doc.data().balance;
                    // 	const alertnewuser = document.querySelector("#alert-newuser");
                    // 	alertnewuser.style.display = "block";
                    // 	$('#alert-newuser').delay(5000).fadeOut('slow');
                    // }
                    document.getElementById('walletm').innerHTML = doc.data().balance;
                    text = document.getElementById('walletm').textContent;
                    balance = parseInt(text, 10);
                    if( balance < 150){
                        const minwallet = document.querySelector("#min-wallet");
                        minwallet.style.display = "block";
                    }
                })
        })





          //Adding new card
          const new_card = document.querySelector('#new-card');




          document.querySelector('#bb1').addEventListener('click', (e) => {
              e.preventDefault();

              const cardname = new_card['cardname'].value;
              const cardno = new_card['cardno'].value;
              const cardexpr = new_card['cardexpr'].value;
              const cardcvv = new_card['cvv'].value;
              const cardphone = new_card['cardphone'].value;





                            db.collection('users').doc(user.uid).collection('wallet').doc("wallet").collection('cards').add({
                              cardname: cardname,
                              cardno: cardno,
                              expr: cardexpr,
                              cvv : cardcvv,
                              phone : cardphone
                            }).then(function(){




                              document.getElementById("addedcard").style.display = "block";
                           $('#addedcard').delay(3000).fadeOut('slow');

                         }).catch(function(er){
                           window.alert(er);
                         })






          });


          //Adding a new account
          const new_account = document.querySelector('#new-account');
          new_account.addEventListener('submit', (e) => {
              e.preventDefault();

              const accountname = new_account['accountname'].value;
              const accountno = new_account['accountno'].value;
              const accountexpr = new_account['accountexpr'].value;
              const accountcvv = new_account['accountcvv'].value;
              const accountphone = new_account['accountphone'].value;

              db.collection('users').doc(user.uid).collection('wallet').get().then(docs1 =>{
                  docs1.forEach(doc1 => {
                      docid1 = doc1.id
                      db.collection('users').doc(user.uid).collection('wallet').doc(docid1).get().then( doc => {
                            db.collection('users').doc(user.uid).collection('wallet').doc(docid1).collection('accounts').add({
                              cardname: accountname,
                              cardno: accountno,
                              expr: accountexpr,
                              cvv : accountcvv,
                              phone : accountphone,
                              accbal : 1000
                            })
                      })
                  })
              })
              new_account.reset();
                 $('#exampleModalCenter1').modal('toggle');
                 document.getElementById("addedaccount").style.display = "block";
              $('#addedaccount').delay(3000).fadeOut('slow');
          });




          addmoneycards = document.querySelector("#addmoneycards")
          //Real time listener for cards and accounts
          db.collection('users').doc(user.uid).collection('wallet').get().then(docs1 =>{
              docs1.forEach(doc1 => {
                  docid1 = doc1.id
                  db.collection('users').doc(user.uid).collection('wallet').doc(docid1).get().then( doc => {
                        db.collection('users').doc(user.uid).collection('wallet').doc(docid1).collection('cards').onSnapshot( snapshot => {
                            let changes = snapshot.docChanges();
                            changes.forEach(change => {
                                if(change.type == 'added'){
                                    renderCard(change.doc);
                                    allccards(change.doc)
                                }else if(change.type = 'removed'){
                                    location.reload();
                                    // let div = newcard.querySelector('[data-id=' + change.doc.id + ']');
                                    // newcard.removeChild(div);
                                    // // div = addmoneycards.querySelector('[data-id=' + change.doc.id + ']');
                                    // // addmoneycards.removeChild(div);
                                }
                            })
                        })
                        db.collection('users').doc(user.uid).collection('wallet').doc(docid1).collection('accounts').onSnapshot( snapshot => {
                            let changes = snapshot.docChanges();
                            changes.forEach(change => {
                                if(change.type == 'added'){
                                    renderAccount(change.doc);
                                    alldcards(change.doc)
                                }else if(change.type = 'removed'){
                                    location.reload();
                                    // let div = newaccount.querySelector('[data-id=' + change.doc.id + ']');
                                    // newaccount.removeChild(div);
                                    // // div = addmoneycards.querySelector('[data-id=' + change.doc.id + ']');
                                    // // addmoneycards.removeChild(div);
                                }
                            })
                        })
                  })
              })
          })






          //Real time listener for wallet

          db.collection('users').doc(user.uid).collection('wallet').onSnapshot( snapshot => {

                      db.collection('users').doc(user.uid).collection('wallet').doc('wallet').get().then(doc => {
                          $('#walletm').html(doc.data().balance)
                          text = document.getElementById('walletm').textContent;
                          amt = parseInt(text, 10);
                          if(amt < 150 ) {
                              const minwallet = document.querySelector("#min-wallet");
                              minwallet.style.display = "block";
                          }else{
                              const minwallet = document.querySelector("#min-wallet");
                              minwallet.style.display = "none";
                          }
                      })
          });



          //Adding money to wallet
          const add_money = document.querySelector('#addmoney');

          document.querySelector('#bb2').addEventListener('click', (e) => {

              e.preventDefault();
              var accid = ($('input[name="cards"]:checked').attr("data-id"));
              var amount = parseInt(add_money['amount'].value);
              var cardcvv = $('input[name="cards"]:checked').parent().find('.form-check-label').find('.card').find('.card-body').find('.ipcvv').val();



              if($('input[name="cards"]:checked').parent().find(".fa-credit-card").val() == undefined){
                window.alert("POTAS");
                  db.collection('users').doc(user.uid).collection('wallet').doc('wallet').collection('accounts').doc(accid).get().then( doc => {
                      amt = doc.data().accbal;
                      cvv = doc.data().cvv;
                  });
                  if(cvv22 == cardcvv){
                      if(amount > amt){
                          const lowmoneycard = document.querySelector("#lowmoneycard");
                          lowmoneycard.style.display = "block";
                          $('#lowmoneycard').delay(3000).fadeOut('slow');
                      }else{
                          db.collection('users').doc(user.uid).collection('wallet').doc('wallet').update({balance: firebase.firestore.FieldValue.increment(amount)});
                          amount = amount*(-1)
                          db.collection('users').doc(user.uid).collection('wallet').doc('wallet').collection('accounts').doc(accid).update({accbal: firebase.firestore.FieldValue.increment(amount)});
                          add_money.reset();
                             $('#addmoneymodal').modal('toggle');
                             const addedmoney = document.querySelector("#addedmoney");
                          addedmoney.style.display = "block";
                          $('#addedmoney').delay(3000).fadeOut('slow');
                      }
                  }else{
                      const wrongcvv = document.querySelector("#wrongcvv");
                      wrongcvv.style.display = "block";
                      $('#wrongcvv').delay(3000).fadeOut('slow');
                  }
              }else{


                  db.collection('users').doc(user.uid).collection('wallet').doc('wallet').collection('cards').doc(accid).get().then( doc => {
                      cvv22 = doc.data().cvv;
                      if(cvv22 == cardcvv){
                          // if(amount > amt){
                          // 	const lowmoneycard = document.querySelector("#lowmoneycard");
                          // 	lowmoneycard.style.display = "block";
                          // 	$('#lowmoneycard').delay(3000).fadeOut('slow');
                          // }else{
                              db.collection('users').doc(user.uid).collection('wallet').doc('wallet').update({balance: firebase.firestore.FieldValue.increment(amount)}).then(function(){

                                $('#exampleModalCenter').modal('hide');
                                $('#exampleModalCenter1').modal('hide');
                                $('#addmoneymodal').modal('hide');
                                add_money.reset();
                                   const addedmoney = document.querySelector("#addedmoney");
                                addedmoney.style.display = "block";
                                $('#addedmoney').delay(3000).fadeOut('slow');
                              });

                          // }
                      }else{
                          const wrongcvv = document.querySelector("#wrongcvv");
                          wrongcvv.style.display = "block";
                          $('#wrongcvv').delay(3000).fadeOut('slow');


                      }
                  });


              }
          });





          //Funding from new source
          var newsrcacc = document.querySelector('#newsrcacc')
          newsrcacc.addEventListener('submit', (e) => {
              e.preventDefault();
              const name = newsrcacc['accountnamenew'].value;
              const phone = newsrcacc['accountphonenew'].value;
              const no = newsrcacc['accountnonew'].value;
              const expr = newsrcacc['accountexprnew'].value;
              const cvv = newsrcacc['accountcvvnew'].value;
              const amt = parseInt(newsrcacc['accountamount'].value);
              if(name!="" && phone!="" && no!="" && expr!="" && cvv!="" && amt!=""){
                  if($('#dcheck').is(":checked")){
                      if(1000 >= amt){
                          db.collection('users').doc(user.uid).collection('wallet').get().then(docs1 =>{
                              docs1.forEach( doc1 => {
                                  docid1 = doc1.id
                                  db.collection('users').doc(user.uid).collection('wallet').doc(docid1).get().then( doc => {
                                        db.collection('users').doc(user.uid).collection('wallet').doc(docid1).collection('accounts').add({
                                          cardname: name,
                                          cardno: no,
                                          expr: expr,
                                          cvv : cvv,
                                          phone : phone,
                                          accbal : (1000-amt)
                                        })
                                  })
                              })
                          db.collection('users').doc(user.uid).collection('wallet').doc('wallet').update({balance: firebase.firestore.FieldValue.increment(amt)});
                          })
                      }else{
                          db.collection('users').doc(user.uid).collection('wallet').get().then(docs1 =>{
                              docs1.forEach(doc1 => {
                                  docid1 = doc1.id
                                  db.collection('users').doc(user.uid).collection('wallet').doc(docid1).get().then( doc => {
                                        db.collection('users').doc(user.uid).collection('wallet').doc(docid1).collection('accounts').add({
                                          cardname: name,
                                          cardno: no,
                                          expr: expr,
                                          cvv : cvv,
                                          phone : phone,
                                          accbal : 1000
                                        })
                                  })
                              })
                          });
                          const lowmoneyaccnew = document.querySelector("#lowmoneyaccnew");
                          lowmoneyaccnew.style.display = "block";
                          $('#lowmoneyaccnew').delay(3000).fadeOut('slow');
                      }
                      newsrcacc.reset();
                  }else{
                      db.collection('users').doc(user.uid).collection('wallet').doc('wallet').update({balance: firebase.firestore.FieldValue.increment(amt)});
                      newsrcacc.reset();
                  }
              }
              else{
                  const invalidacc = document.querySelector("#invalidacc");
                  invalidacc.style.display = "block";
                  $('#invalidacc').delay(3000).fadeOut('slow');
              }

          })







          // var newsrccard = document.querySelector('#newsrccard')
          // newsrccard.addEventListener('submit',(e) => {
          // 	e.preventDefault();
          // 	const name = newsrccard['cardnamenew'].value;
          // 	const phone = newsrccard['cardphonenew'].value;
          // 	const no = newsrccard['cardnonew'].value;
          // 	const expr = newsrccard['cardexprnew'].value;
          // 	const cvv = newsrccard['cvvnew'].value;
          // 	const amt = parseInt(newsrccard['amount'].value);
          // 	if(name!="" && phone!="" && no!="" && expr!="" && cvv!="" && amt!=""){
          // 		if($('#ccheck').is(":checked")){
          // 				db.collection('users').doc(user.uid).collection('wallet').get().then(docs1 =>{
          // 					docs1.forEach(doc1 => {
          // 						docid1 = doc1.id
          // 						db.collection('users').doc(user.uid).collection('wallet').doc(docid1).get().then( doc => {
          // 						  	db.collection('users').doc(user.uid).collection('wallet').doc(docid1).collection('cards').add({
          // 								cardname: name,
          // 								cardno: no,
          // 								expr: expr,
          // 								cvv : cvv,
          // 								phone : phone
          // 						  	})
          // 						})
          // 					})
          // 					db.collection('users').doc(user.uid).collection('wallet').doc(wallet.id).update({balance: firebase.firestore.FieldValue.increment(amt)});
          // 				})
          // 		}else{
          // 			db.collection('users').doc(user.uid).collection('wallet').doc(wallet.id).update({balance: firebase.firestore.FieldValue.increment(amt)});
          // 		}
          // 	}else{
          // 		const invalidcard = document.querySelector("#invalidcard");
          // 		invalidcard.style.display = "block";
          // 		$('#invalidcard').delay(3000).fadeOut('slow');
          // 	}
          // })

      }
  });
  const new_card = document.querySelector('#new-card');
  function chek(){
    const cardname = new_card['cardname'].value;
    const cardno = new_card['cardno'].value;
    const cardexpr = new_card['cardexpr'].value;
    const cardcvv = new_card['cvv'].value;
    const cardphone = new_card['cardphone'].value;


    if((cardname == "")||(cardno == "")||(cardexpr == "")||(cardcvv == "")||(cardphone == ""))
    {
      window.alert("ETHI");
      document.getElementById("deletedcard1").style.display = "block";
   $('#deletedcard1').delay(3000).fadeOut('slow');
    }
  }
