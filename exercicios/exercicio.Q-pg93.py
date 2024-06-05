total=0 
largura=0
comprimento=0
comodo=0
area=0
confirmacao='s'

while True:
    comodo= input('qual o comodo? ')
    comprimento= float(input(f'qual o comprimento d{comodo}? '))
    largura= float(input(f'qual a largura d{comodo}?'))
    area= comprimento * largura
    print(f'area d{comodo} e {area}')
    total += area
    confirmacao= input('confirmar? [s]im ou [n]ao')
    if confirmacao != 's': break
    
print(f'area total:{total}')
 
#  qual o comodo? o quarto1
# qual o comprimento do quarto1? 2
# qual a largura do quarto1?3
# area do quarto1 e 6.0
# confirmar? [s]im ou [n]aos
# qual o comodo? o quarto2 
# qual o comprimento do quarto2 ? 3
# qual a largura do quarto2 ?5
# area do quarto2  e 15.0
# confirmar? [s]im ou [n]aos
# qual o comodo? o quarto3
# qual o comprimento do quarto3? 6
# qual a largura do quarto3?8
# area do quarto3 e 48.0
# confirmar? [s]im ou [n]aon
# area total:69.0
    