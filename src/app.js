import 'bootstrap';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'orderform',     name: 'orderform',    moduleId: 'orderform',    nav: true, title:'Order Form' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}



// export class Welcome{
// 	heading = 'Welcome to the Aurelia Navigation App!';
// 	firstName = 'Jason';
// 	lastName = 'Bagwell';

// 	get fullName(){
// 		return `${this.firstName} ${this.lastName}`;
// 	}

// 	submit(){
// 		alert(`Welcome, ${this.fullName}!`);
// 	}
// }