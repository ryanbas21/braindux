import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

class Store {

  constructor(private reducer:any){
    this.state = reducer(null,{})
    this.listeners = [];
    this.statehistory = []; //holds previous states in the form of a stack
    this.listenerHistory = [];
  }

  getState() {
    return this.state
  }
  /*
    * Takes in an action, which is a string (name of action), that gets passed into the reducer
   */
  dispatch(private action: Object){
    if (this.state) this.statehistory.push(this.state);
    this.state = reducer(state,action);
    this.listeners.forEach( item => item() ) //loop through the array of listeners
  }

  subscribe(fn){
    this.listenerHistory.push(this.listeners); //saving the previous listeners history to the array
    this.listeners = this.listeners.concat(fn); // not altering the original listeners array.
    return () => this.listeners.filter( func => func !== fn)
  }

	state;
	listeners = [];
	stateHistory = []; //holds previous states in the form of a stack
	listenerHistory = [];

	reducer(state: Object, action: Object) {

	}

	constructor() { }

	ngOnInit(): void {
		this.state = this.reducer(null, {})
	}

	getState() {
		return this.state
	}
	/*
	  * Takes in an action, which is a string (name of action), that gets passed into the reducer
	 */
	dispatch(action: Object) {
		if (this.state) this.stateHistory.push(this.state);
		this.state = this.reducer(this.state, action.type);
		this.listeners.forEach(l => l()) //loop through the array of listeners
	}

	subscribe(fn) {
		this.listenerHistory.push(this.listeners);
		this.listeners = this.listeners.concat(fn); // not altering the original listeners array.
		return () => this.listeners.filter(func => func !== fn)
	}

}
