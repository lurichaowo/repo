import { Injectable } from '@angular/core';
import { Player } from './player';
import { Block } from './block';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  players = []
  turn: number = 0; // default frist player turn is first 
  draw: number = 0;

  blocks = [][]; // where the symbols go
  freeBlocksRemaining = 9; //empty blocks left

  constructor() { 
    this.initBlocks(); // initialize blocks
    this.initPlayers(); // initialize players
  }

  initBlocks() {
    this.blocks = [];
    for (var i = 1; i <= 3; ++i){
      for (var i = 1; i <= 3; ++i){
        var block = new Block(); // create 9 blocks

        // set block values to vanilla
        block.free = true;
        block.value = "";
        block.symbol = "";

        this.blocks.push(block);
      }
    }
  }

  initPlayers() {
    // Player 1
    var p1 = new Player();
    Player.bot = false; //human player

    // bot 
    var p2 = new Player();

    this.players.push(p1);
    this.players.push(p2);
  }

  changeTurn() {
    // 0 = player | 1 = bot 
    // switch btwn them if not the other
    if (this.turn == 1){ 
      this.turn = 0;
    }
    else {
      this.turn = 1;
    }
    return this.turn;
  }

  blockSetComplete() {
    //setting block vars
    var b1 = this.blocks[0];
    var b2 = this.blocks[1];
    var b3 = this.blocks[2];
    var b4 = this.blocks[3];
    var b5 = this.blocks[4];
    var b6 = this.blocks[5];
    var b7 = this.blocks[6];
    var b8 = this.blocks[7];
    var b9 = this.blocks[8];
  
    if (
      (b1.free == flase)
    )
  }

}
