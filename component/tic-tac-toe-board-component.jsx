"use strict";

class TicTacToeBoardComponent
extends React.Component
{
	render( ){
		return	(
					<div
						className={
							`
								tic-tac-toe-board-component
								game-board-component
							`
						}
					>
						<div>
							<TicTacToeBoardCellComponent />
							<TicTacToeBoardCellComponent />
							<TicTacToeBoardCellComponent />
						</div>
						<div>
							<TicTacToeBoardCellComponent />
							<TicTacToeBoardCellComponent />
							<TicTacToeBoardCellComponent />
						</div>
						<div>
							<TicTacToeBoardCellComponent />
							<TicTacToeBoardCellComponent />
							<TicTacToeBoardCellComponent />
						</div>
					</div>
				);
	}
}
