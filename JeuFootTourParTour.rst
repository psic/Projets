Jeu de foot tour par tour 
=========================

A son tour le joueur dépense 5 points d'action dans son équipe:
	+ déplacement sans ballon
	+ déplacement avec ballon
	+ passe
	+ tir
	+ dribble
	+ tacle
	+ anticipation a la défence
	
Chaque joueur a 4 points de compétences répartie en attaque et défense. Possibilité d'acheter, d'avoir en bonus des joueurs avec 5 ou 6 points de compétences, ou avec des actions bonus (super drible, super tir, etc.) ou des actions bonus/coups spéciaux (une-deux, etc.). Le gardien à 5 en défence.

Au début de la partie le joueur choisi 10 joueurs parmi les joueurs dispo.
Remplacement possible dès que... coute X point d'action.
Premier arrivé à 3 buts gagne la partie.

Version compliqué
-----------------

7x7
terrain : 25 x 36 (cases) (1=2x2 metres)

+ déplacement sans ballon : 
	- cout : 1 pt action/case
	- limite : maximum de déplacement par tour de Attaque +1 cases (exemple : un joueur avec 0 en attaque peut se déplacer d'une case/tour, un joueur avec 3 en attaque peut se déplacer de 4 cases/tour)
+ déplacement avec ballon :
	- cout : 2 pts action/case
	- limite : maximum de déplacement par tour de Attaque +1 cases (exemple : un joueur avec 0 en attaque peut se déplacer d'une case/tour, un joueur avec 3 en attaque peut se déplacer de 4 cases/tour)

+ passe :
	- cout : 
		* 2pts action : passe courte (max ? cases)
		* 3pts action : passe moyenne (max ? case)
		* 4pts action : passe forte (max ? case)
		* 5pts action : passe éclair (max ? case) -- interception impossible.
	- interception : 
			* Quand un joueur déclenche la passe, on demande à l'adversaire de diriger les interceptions. Plusieurs joueurs peuvent tenter une interception tant qu'il reste des points d'action qui défend. Attention ces points d'actions son pris sur les points d'action de leur prochain tour.
			* un défenseur à une capacité d'interception de Défence cases (exemple un joueur à 0 en défense peut intercepter une passe qui passe sur sa case, un joueur avec 1 en Défense peut intercepter une passe qui passe dans le carré des 9 (3x3) case autour de lui, un joueur avec 4 en défense peut intercepter une passe qui passe dans le carré de 81 (9x9) cases autour de lui. Plus c'est loin moins l'interception à de chance de réussir (fonction également de la Défence du joueur). Une interception tentée coûte 1pt/case d'éloignement sur le prochain déplacement de l'équipe.
	- termine le tour d'un joueur s'il y a interception.
	- Reception de la passe : En fonction de la capacité attaque du joueur qui reception la passe, la balle peut s'éloigner ou non du receveur.

+ tir :
	- cout :
		* 3pts d'action : tir faible
		* 4pts d'action : tir moyen
		* 5pts d'action : tir fort
	- termine le tour d'un joueur automatiquement.

+ dribble :
	- cout : 3pts d'action. (c'est cher)
	- résolution : Calul entre l'attaque de l'attaquant et la défence du défenseur + random.
	- termine le tour d'un joueur s'il y a interception (drible raté).

+ tackle :
	- cout : 2pts d'action
	- résolution : Calcul entre la défence du défenseur et l'attaque de l'attaquant + random.
	- faute : Plus le défenseur est faible en défense plus il y a de chance de faire faute. Probabilité augmente grandement si le tackle est réalisé par derrière de l'attaquant.

+ anticipation a la defense :
	- cout : 1pt
	- permet d'augmenter la probabilité/capacité d'interception d'un joueur.

Version simple
--------------
5x5
Gardien géré par l'ordi ou pas de gardien
terrain : 5 x 6 ou 8 (cases)

Version mobile
--------------
5x5
Gardien géré par l'ordi ou pas de gardien
terrain : 9 x 14-15 (cases)


