////    ForkJoin  :

///  you can create an array of observables and subscribe to them 
///    using ForkJoin which will wait until all the threads are complete:


let obsArray: Observable<Object1 | Object2>[] = [];
obsArray.push(myObject1);
obsArray.push(myObject2);
Observable.forkJoin(obsArray).subscribe(
    responses => {console.log('both completed successfully!');},
    error => {console.log('error');}
);




