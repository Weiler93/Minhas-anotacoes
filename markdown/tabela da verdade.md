# Tabela da verdade

> ## Exercicio:## construir uma _tabela da verdade_ para verificar as seguintes equivalencias
> - `!(A && B) ==> !A || !B`
> - `!(A || B) ==> !A && !B`

***Resposta***

**`A`**   |   **`B`**   |   **`!A`**   |   **`!B`**   |   **`A` &and; `B`**   |  **`A` &or; `B`**  |  **`!(A` &and;`B`)**  |   **`!(A` &or;`B`)**   |   **`!A` &and; `!B`**  |   **`!A` &or; `!B`**  | **`A` &and; `!(A`&and; `B)`**
:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:
V | V | F  |  F  | V  | V  |  F |  F |  F |  F  |  F
V | F | F  |  V  | F  | V  |  V |  F |  F |  V  |  V 
F | V | V  |  F  | F  | V  |  V |  F |  F |  V  |  F
F | F | V  |  V  | F  | F  |  V |  V |  V |  V  |  F