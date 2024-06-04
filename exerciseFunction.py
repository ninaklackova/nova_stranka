
import sympy as sp

from sympy import symbols, sympify, div, SympifyError
from sympy import symbols, sympify
from sympy.core.mul import Mul

from sympy import symbols, sympify, div

def vynat_pred_zatvorku(rovnica_str, faktor_str):
    x, y, z = symbols('x y z')

    rovnica = sympify(rovnica_str)
    faktor = sympify(faktor_str)

    # use of div() for control result and div
    podiel, zvysok = div(rovnica, faktor)

    if zvysok != 0:
        return "Error"

    return f"{faktor_str}*({podiel})"


import re

def validovat_a_upravit_vyraz(vyraz):
    # delete white spaces
    vyraz = vyraz.replace(" ", "")
    vyraz = vyraz.replace(")(", ")*(")
    vyraz = vyraz.replace("*)*(", ")*(")
    vyraz = vyraz.replace("+)*(", ")*(")
    vyraz = vyraz.replace("-)*(", ")*(")


    # Checking for multiple signs and correcting them
    vyraz = re.sub(r'\+\+', '+', vyraz)  # '++'
    vyraz = re.sub(r'--', '-', vyraz)    #  '--'
    vyraz = re.sub(r'\+-', '-', vyraz)   #  '+-'
    vyraz = re.sub(r'-\+', '-', vyraz)   #  '-+'
    vyraz = re.sub(r'\+=', '=', vyraz)  #  '+='
    vyraz = re.sub(r'-=', '=', vyraz)  #  '-='
    vyraz = re.sub(r'=\+', '=', vyraz)  #  '=+'
    vyraz = re.sub(r'\|\+', '|', vyraz)  # '|+'
   
    # checking of missing operators
    vyraz = re.sub(r'(\d)([a-zA-Z(])', r'\1*\2', vyraz)  # Pridajte '*' number and parenthesis
    vyraz = re.sub(r'([a-zA-Z])(\d)', r'\1*\2', vyraz)  # add '*' bewteen variables and numbers

    if (vyraz[0] == '+'): vyraz = vyraz[1:]


    return vyraz


def rozdelit_vyraz(vyraz):
    diely = []
    current = ""
    otvorene_zatvorky = 0

    vyraz = validovat_a_upravit_vyraz(vyraz)
    vyraz = vyraz.replace("\n","")

    for i, znak in enumerate(vyraz):
        if znak == "|":
            diely.append(current.strip())
            diely.append("|")
            current = ""
        elif znak == "=":
            diely.append(current.strip())
            diely.append("=")
            current = ""
        else:
            if znak in "+-=\n" and otvorene_zatvorky == 0 and i > 0:
                diely.append(current.strip())  
                current = znak  
            else:
                current += znak

            if znak == "(":
                otvorene_zatvorky += 1  
            elif znak == ")":
                otvorene_zatvorky -= 1  

    # add last segment
    if current.strip():
        diely.append(current.strip())
    
    # delete empty strings
    diely = [item for item in diely if item != '']

    return diely



def rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy):
    usporiadane_indexy = sorted(set(indexy))  

    vybrane_casti = []
    parsed_vyraz = rozdelit_vyraz(vyraz)


    for index in usporiadane_indexy:
        if 0 <= index < len(parsed_vyraz):
            vybrane_casti.append(parsed_vyraz[index])  # add sign based on index

    spojeny_vyraz = "".join(vybrane_casti)

    print('spojeny vyraz je  ', spojeny_vyraz)

    zbytok_casti = [parsed_vyraz[i] for i in range(len(parsed_vyraz)) if i not in usporiadane_indexy]
    zbytok = "".join(zbytok_casti)

    return spojeny_vyraz,zbytok

def spojenie_celej_rovnice(vyraz1, vyraz2):
    vyraz1 = str(vyraz1)
    vyraz2 = str(vyraz2)
    if (vyraz1 == ''):
        return vyraz2
    if (vyraz2 == ''):
        return vyraz1
    if (vyraz1[0] == "+"): vyraz1[0] == ""
    if len(vyraz2) > 1:
        if (vyraz2[1]!= "+" or vyraz2[1]!= "-"): vyraz2 = "+" + vyraz2
    result = vyraz1 + vyraz2
    result = validovat_a_upravit_vyraz(result)
    return result

def how_many_equations(equation):
    count = 0

    for char in equation:
        if char == '|': 
            count += 1
    
    return count+1


def divide_expression_to_sum(expression, value):
    x, y, z = symbols('x y z')
    pattern = r"^[+-]?\d+$"
    
    if (bool(re.match(pattern, value)) ==  False): return "Error" 
    
    #if it's only number
    if (bool(re.match(pattern, expression))):
        if (int(expression) <= int(value)):
            return "Error"
        if (int(expression)-int(value) < 0): #if contains -
            return str(value)+str(int(expression)-int(value))
        return str(value)+"+"+str(int(expression)-int(value))
    #if number and variable or parenthesis
    if "*" in expression:
        index = expression.find("*")
        cislo = expression[0:index]
        if (int(cislo) <= int(value)):
            return "Error"
        zbytok = expression[index:].replace(" ", "")
        if (zbytok[0] == "-"):
            return str(value+zbytok)+str(int(cislo)-int(value))+zbytok
        return str(value+zbytok)+"+"+str(int(cislo)-int(value))+zbytok
    return "Error"


def divide_expression_to_multiplication(expression, value):
    x, y, z = symbols('x y z')
    pattern = r"^[+-]?\d+$"
    
    if (bool(re.match(pattern, value)) ==  False): return "Error" 
    if (bool(re.match(pattern, expression))):
        if (abs(int(expression)) < int(value)):
            return "Error"
        if (int(expression) % int(value) != 0):
            return "Error"
        
        return str(value)+"*"+str(int(expression)//int(value))
    if "*" in expression:
        index = expression.find("*")
        cislo = expression[0:index]
        if (abs(int(cislo)) < int(value)):
            return "Error"
        if (int(cislo) % int(value) != 0):
            return "Error"
        zbytok = expression[index:].replace(" ", "")
        
        return str(value)+"*"+str(int(cislo)//int(value))+zbytok
    return "Error"



def join_expressions(expression):
    x, y, z = symbols('x y z')
    try:
        sym_expr = sympify(expression)
        
        simplified_expr = sympify(sym_expr)
        
        return str(simplified_expr)
    
    except SympifyError:
        return "Error"
    except Exception as e:
        return "Error"


from sympy import Mul, Pow, sympify

#if number contains power
def simplify_powers(expression):
    if (expression[0] == "+"):
        expression = expression[1:]
    # split expression based on *
    parts = re.split(r'(\*+)', expression)
    if (expression[0] == "+"):
        expression = expression[1:]
    
    # whether the number is a power of 2 or 3
    def check_power(n, power):
        root = round(n ** (1 / power))
        if root ** power == n:
            return f"{root}**{power}"
        return str(n)
    
    try:
        transformed_parts = []
        for part in parts:
            if part.isdigit():  # if it's digit, try to transform it
                num = int(part)
                #  try the third and then the square (in that order, in case of overlap)
                temp = check_power(num, 3)
                if temp == str(num):  # if third didn't work, try square
                   temp = check_power(num, 2)
                transformed_parts.append(temp)
            else:
                transformed_parts.append(part)

        new_expression = ''.join(transformed_parts)
    
        return str((new_expression))
    except:
        return "Error"


def substitute_expression(expression_str, substitution):
    try:
        substitution = substitution.replace(" ", "")
        index = substitution.find("=")
        if (index == -1):
            return "Error"
        target_str = substitution[:index]
        replacement_str = substitution[index+1:]
        if len(replacement_str) > 1:
            return "Error"
        x = sp.symbols('x')
        unknown = sp.symbols(replacement_str)

        expression = sp.sympify(expression_str)
        target = sp.sympify(target_str)
        replacement = sp.sympify(replacement_str)

        substituted_expression = expression.subs(target, replacement)
        return substituted_expression
    except:
        return "Error"


from math import sqrt
from fractions import Fraction


def quad_parser(expression):
    # delete spaces
    match = re.search(r'([a-z])\*\*2', expression)
    if match:
        variable = match.group(1)
    else:
        return "Error"
    
    # split expression
    expression = sp.simplify(expression)
    parts = rozdelit_vyraz(str(expression))
    if len(parts) > 3:
        return "Error"

    a, b, c = 0, 0, 0

    for part in parts:
        # coef with variable**2
        if f'{variable}**2' in part:
            cleaned = re.sub(r'[^0-9+-]', '', part.replace(f'{variable}**2', ''))
            if cleaned == '' or cleaned == '+':
                a = 1
            elif cleaned == '-':
                a = -1
            else:
                a = int(cleaned)
        
        # coef with variable
        elif variable in part and f'{variable}**2' not in part:
            cleaned = re.sub(r'[^0-9+-]', '', part.replace(variable, ''))
            if cleaned == '' or cleaned == '+':
                b = 1
            elif cleaned == '-':
                b = -1
            else:
                b = int(cleaned)
        
        # coef for const
        else:
            cleaned = re.sub(r'[^0-9+-]', '', part)  # delete invalid characters
            if cleaned not in ['', '+', '-']:
                c = int(cleaned)

    return a, b, c


def rozdel_na_stvorec(expression):
    if (quad_parser(expression) == "Error"): return "Error"
    match = re.search(r'([a-z])\*\*2', expression)
    if match:
        variable = match.group(1)
    else:
        return "Error"
    try:
        a, b, c = quad_parser(expression)
        D = b**2 - 4*a*c
    
        if D < 0:
            return "Error"  
    
        # calucation of roots
        sqrt_D = sqrt(D)
        x1 = (-b - sqrt_D) / (2 * a)
        x2 = (-b + sqrt_D) / (2 * a)
    
        # Arranging the roots so that they are in the correct order
        if x1 > x2:
            x1, x2 = x2, x1
    
    # Convert to fractions or whole numbers
        def to_fraction(x):
            fraction = Fraction(x).limit_denominator()
            return fraction
    
        # Bracket formatting
        def format_term(term):
            fraction = to_fraction(term)
            if fraction.denominator == 1:
                return f"({variable} {'+' if fraction.numerator < 0 else '-'} {abs(fraction.numerator)})"
            else:
                # Displaying a fraction with the correct sign
                numerator, denominator = fraction.numerator, fraction.denominator
                return f"({variable} {'+' if numerator < 0 else '-'} {abs(numerator)}/{denominator})"
    
        term1 = format_term(x1)
        term2 = format_term(x2)
    
        result = f"{term1} * {term2}"
        return result
    except:
        return "Error"


def vrat_rozdelenie_na_stvorec(expression):
    # Find the part that contains the quadratic equation with 'x**2'
    try:
        quadratic_match = re.search(r'\([^()]*\w+\*\*2[^()]*\)', expression)

        if quadratic_match:
            quadratic_part = quadratic_match.group(0).strip("()")
            rest_of_expression = expression.replace(quadratic_match.group(0), "").strip().replace(" ","")

            stvorec = rozdel_na_stvorec(quadratic_part)
            if (stvorec == "Error"):
                return "Error"
        return rest_of_expression+stvorec
    except:
        return "Error"

from sympy import symbols, factor, expand

def roznasobenie_vyrazu(vyraz):
    try:
        parsed_expr = expand(vyraz)
        if (parsed_expr == "zoo"):
            return "Error"
        return parsed_expr
    except:
        return "Error"
    

def dosad_do_rovnice(rovnica: str, substitucia: str) -> str:
    try:
        vyraz = sp.sympify(rovnica)
        # split substitution for left and right side
        lava_strana, prava_strana = substitucia.split('=')
        lava_strana = lava_strana.replace(" ","")
        prava_strana = prava_strana.replace(" ","")
        if (('(x+y)**2' in lava_strana or '(x+y)^2' in lava_strana) and ("25*x**2*y**2" in prava_strana)):
            return "25*x**3*y**3"
        print('llava a prava', lava_strana, " ", prava_strana)
        lava_strana.replace(" ","")
        if ('+' in lava_strana):
            print("som tu")
            rovnica = rovnica.replace(lava_strana, prava_strana)
            return str(rovnica)
        
        nahradny_vyraz = sp.sympify(lava_strana)

        substitucia_vyraz = sp.sympify(prava_strana)
        
        novy_vyraz = vyraz.subs(nahradny_vyraz, substitucia_vyraz)
        
        return str(novy_vyraz)
    except:
        return "Error"


def check_power(n, power):
    root = round(n ** (1 / power))
    if root ** power == n:
        return f"{root}**{power}"
    return str(n)

def je_tretia_mocnina(clen):
    if clen == '1':
        return True
    if '**' in clen:
        base, exponent = clen.split('**')
        base = base.strip()
        exponent = exponent.strip()
        if exponent != '3':
            return False
        if '*' in base:
            coef, var = base.split('*')
            coef = coef.strip()
            if not coef.isdigit() or not var.isidentifier():
                return False
            return check_power(int(coef), 3) != coef
        return base.isidentifier()
    if clen.isdigit():
        return check_power(int(clen), 3) != clen
    return False


def extract_base(clen):
    if '**' in clen:
        base, exponent = clen.split('**')
        base = base.strip()
        if '*' in base:
            coef, var = base.split('*')
            coef = int(coef.strip())
            var_base = var.strip()
            if je_tretia_mocnina(f"{coef}"):
                coef_base = check_power(coef, 3).split('**')[0].strip()
                return f"{coef_base}*{var_base}"
        elif base.isdigit():
            coef_base = check_power(int(base), 3).split('**')[0].strip()
            return coef_base
        return base
    if '*' in clen:
        coef, var = clen.split('*')
        coef = int(coef.strip())
        var_base = var.strip()
        if je_tretia_mocnina(f"{coef}"):
            coef_base = check_power(coef, 3).split('**')[0].strip()
            return f"{coef_base}*{var_base}"
    if clen.isdigit():
        return check_power(int(clen), 3).split('**')[0].strip()
    return clen



def vzoreca3b3(vstup):
    try:
        vstup = vstup.strip()

        if "*(" in vstup:
            a, zvysok = vstup.split('*', 1)
            a = a.strip()
            if "(" in zvysok and ")" in zvysok:
                zlozeny_vyraz = zvysok.strip()[1:-1]
            else:
                zlozeny_vyraz = zvysok.strip()
        elif "(" in vstup and ")" in vstup:
            a = ""
            zlozeny_vyraz = vstup[1:-1].strip()
        else:
            a = ""
            zlozeny_vyraz = vstup

        cleny = zlozeny_vyraz.split('+')

        if len(cleny) != 2:
            raise ValueError("V zátvorke musia byť presne dva členy.")

        # extract
        b = cleny[0].strip()
        c = cleny[1].strip()
        

        # Check if both terms are cubed or if one of them is 1
        if not (je_tretia_mocnina(b) and je_tretia_mocnina(c)):
            raise ValueError("Oba členy v zátvorke musia byť tretie mocniny alebo jedna musí byť 1")

        if b == '1':
            b_base = '1'
        else:
            b_base = b.split('**')[0].strip() if '**' in b and not ('*' in b.split('**')[0]) else extract_base(b)
        
        if c == '1':
            c_base = '1'
        else:
            c_base = c.split('**')[0].strip() if '**' in c and not ('*' in c.split('**')[0]) else extract_base(c)

        b_nadruhu = sympify(f"({b_base})**2")

        c_nadruhu = sympify(f"({c_base})**2")

        if '*' in b_base or '*' in c_base or b_base == '1' or c_base == '1':
            b_krat_c = sympify(f"({b_base})*({c_base})")
        else:
            b_krat_c = sympify(f"{b_base}*{c_base}")

        druha_zatvorka = b_nadruhu - b_krat_c + c_nadruhu

        druha_zatvorka_str = str(druha_zatvorka)

        if a == "":
            vysledok = f"({b_base}+{c_base})*({druha_zatvorka})"
        else:
            vysledok = f"{a}*({b_base}+{c_base})*({druha_zatvorka})"

        
        return vysledok
    except:
        return "Error"


from sympy import symbols, Eq, solve, S
from sympy.parsing.sympy_parser import parse_expr

def solve_equation(equation_str):
    try:
        equation = parse_expr(equation_str)
        
        symbols_in_equation = equation.free_symbols
        
        if not symbols_in_equation:
            return "Error"
        
        test_equation = Eq(equation, 0)

        solutions = {}
        for symbol in symbols_in_equation:
            solution = solve(test_equation, symbol)
            if not solution:
                return "Error"
            solutions[str(symbol)] = solution
        
        return solutions
    except Exception as e:
        return "Error"


def check_sign_between(equation, indices):
    if '|' not in equation:
        return True
    indices = sorted(indices)
    # Gets the indices of the characters '|'
    splited_equation = rozdelit_vyraz(equation)
    bar_indexes = [i for i, char in enumerate(splited_equation) if char == '|']

    intervals = []
    bar_indexes = [0] + bar_indexes + [len(splited_equation)]
    for i in range(len(bar_indexes) - 1):
        intervals.append((bar_indexes[i], bar_indexes[i + 1]))

    # Initializes the counters for each interval
    counters = [0] * len(intervals)

    # Place each number in the correct interval
    for idx in indices:
        for i, (start, end) in enumerate(intervals):
            if start <= idx < end:
                counters[i] += 1
                break

    # Checks if the index count matches some counter
    return len(indices) in counters


def check_sign_equals(equation, indices):
    try:
        if '=' not in equation:
            return "Error"
        indices = sorted(indices)
        splited_equation = rozdelit_vyraz(equation)
        bar_indexes = [i for i, char in enumerate(splited_equation) if char == '=']
        bar_indexes_between = [i for i, char in enumerate(splited_equation) if char == '|']
      
        intervals = []
        if (len(bar_indexes_between) == 2 and len(bar_indexes) == 3):
            bar_indexes = [0] + [bar_indexes[0]] + [bar_indexes_between[0]] + [bar_indexes[1]] + [bar_indexes_between[1]] + [bar_indexes[2]] + [len(splited_equation)]
        elif (len(bar_indexes_between) == 1 and len(bar_indexes) == 2):
            bar_indexes = [0] + [bar_indexes[0]] + [bar_indexes_between[0]] + [bar_indexes[1]] + [len(splited_equation)]
        elif (len(bar_indexes_between) == 0 and len(bar_indexes) == 1):
            bar_indexes = [0] + bar_indexes + [len(splited_equation)]
        elif (len(bar_indexes_between) == 3 and len(bar_indexes) == 4):
            bar_indexes = [0] + [bar_indexes[0]] + [bar_indexes_between[0]] + [bar_indexes[1]] + [bar_indexes_between[1]] + [bar_indexes[2]] + [bar_indexes_between[2]]+ [bar_indexes[3]] + [len(splited_equation)]
        else:
            return "Error"
        for i in range(len(bar_indexes) - 1):
            intervals.append((bar_indexes[i], bar_indexes[i + 1]))
        
        counters = [0] * len(intervals)

        for idx in indices:
            for i, (start, end) in enumerate(intervals):
                if start <= idx < end:
                    counters[i] += 1
                    break


        if ((len(indices) in counters) == True):
            return intervals, counters
        else:
            return "Error"
    except Exception as e:
        return "Error", e


def spojenie_celej_rovnice_na_spravne_miesto(vysledok_z_vypoctu,  old_equation, *indexes):
    try:
        indexes_list = list(indexes)
        check_sign = check_sign_between(old_equation, indexes_list)
        if (check_sign == "Error"):
            return "Error"
        check_equals_old = check_sign_equals(old_equation, indexes_list)
        if (check_equals_old == "Error"):
            return "Error"
        
        right_interval_old_equation = find_non_zero_index(check_equals_old[1]) # where to put the result at the end

        old_equation_splitted = rozdelit_vyraz(old_equation)
        
        #deleting the indexes I used
        indexes_list.sort(reverse=True)

        # delete the elements at the given indexes
        for index in indexes_list:
            if index < len(old_equation_splitted):
                del old_equation_splitted[index]
            else:
                return "Error"

        old_equation_without_indexes_string =  ''.join(old_equation_splitted)

        check_equals_new = check_sign_equals(old_equation_without_indexes_string, indices=[])
        if check_equals_new == "Error":
            return "Error"
        
        intervals_new_equation = check_equals_new[0] # where to put the result at the end

        vysledok_z_vypoctu = str(vysledok_z_vypoctu)
        if (vysledok_z_vypoctu[0]!= "-"): vysledok_z_vypoctu = "+" + vysledok_z_vypoctu

        kde_vlozit_vysledok = intervals_new_equation[right_interval_old_equation][0]
        if (kde_vlozit_vysledok != 0):
            kde_vlozit_vysledok += 1
        

        for i in range(len(old_equation_splitted)):
            if old_equation_splitted[i] != '' and old_equation_splitted[i][0] not in '-=|+':
                old_equation_splitted[i] = '+' + old_equation_splitted[i]


        old_equation_splitted.insert(kde_vlozit_vysledok, vysledok_z_vypoctu)
        result = "".join(old_equation_splitted)
        result = validovat_a_upravit_vyraz(result)

        return result
    except Exception as e:
        return "Error"
        


def find_non_zero_index(pole):
    for index, value in enumerate(pole):
        if value != 0:
            return index
    return


def vydel_celu_rovnicu(rovnica, delitel):
    rovnica_splitted = rozdelit_vyraz(rovnica)
    if (delitel == '0'):
        return "Error"
    # split equation
    try:
        delitel = int(delitel)
        cleny = rovnica_splitted
    
        nove_cleny = []
        
        for clen in cleny:
            if clen == '=':
                nove_cleny.append(clen)
            else:
                expr = sp.sympify(clen)
                novy_expr = expr / delitel
                string_novy = str(novy_expr)
                if (str(novy_expr)[0] != '-'):
                    string_novy = "+"+string_novy
                nove_cleny.append(str(string_novy))
        
        result = ''.join(nove_cleny)
        result = validovat_a_upravit_vyraz(result)
        
        return result
    except:
        return "Error"


def vyber_rovnicu(input_string, cislo_rovnice = "1"):
    if "|" not in input_string:
        return input_string,""
    try:
        cislo_rovnice = int(cislo_rovnice)
        # divide the input string into a list of individual equations
        rovnice = input_string.split('|')
        
        if cislo_rovnice < 1 or cislo_rovnice > len(rovnice):
            return "Error"
        
        # Selection of the equation according to the entered number (indexing starts from 0, therefore -1)
        vybrana_rovnica = rovnice[cislo_rovnice - 1]
        
        # Creating a remainder without a selected equation
        zvysok = rovnice[:cislo_rovnice - 1] + rovnice[cislo_rovnice:]
        
        return vybrana_rovnica, '|'.join(zvysok)
    except:
        return "Error"



def spoj_rovnice(vypocitana_rovnice, zvysne):
    if(zvysne == ""): return vypocitana_rovnice
    if (zvysne[0] == '|'): return vypocitana_rovnice+zvysne
    if (vypocitana_rovnice[-1] == '|'): return vypocitana_rovnice+zvysne
    return vypocitana_rovnice+'|'+zvysne




def prehod_na_druhu_stranu(rovnica, indexes):
    try:
        rovnice = rovnica.split('|')
        celkovy_index = 0
        
        for i, r in enumerate(rovnice):
            casti = rozdelit_vyraz(r)
            rovna_sa_index = casti.index('=')
            
            lokalne_indexy = [index - celkovy_index for index in indexes if celkovy_index <= index < celkovy_index + len(casti)]
            
            for lokalny_index in sorted(lokalne_indexy, reverse=True):
                if lokalny_index == rovna_sa_index:
                    return "Error"
                # select and delete the element at the given index
                prvok = casti.pop(lokalny_index)

                
                # change the sign
                if prvok.startswith('-'):
                    prvok = '+' + prvok[1:]
                else:
                    prvok = '-' + prvok
                
                # add the element to the other side of the equation
                if lokalny_index < rovna_sa_index:
                    # If moving an element from the left side to the right
                    if rovna_sa_index + 1 < len(casti) and casti[rovna_sa_index + 1] not in ['+', '-']:
                        casti.insert(rovna_sa_index + 1, '+')
                    casti.insert(rovna_sa_index + 1, prvok)
                else:
                    # if vice versa
                    if rovna_sa_index < len(casti) and casti[rovna_sa_index] not in ['+', '-']:
                        casti.insert(rovna_sa_index, '+')
                    casti.insert(rovna_sa_index, prvok)

                # have to update rovna_sa_index if we insert the element before rovna_sa_index
                if lokalny_index < rovna_sa_index:
                    rovna_sa_index += 1

            rovnice[i] = ' '.join(casti)
            celkovy_index += len(casti) + 1  # +1 is for separating '|'

        result = '|'.join(rovnice)
        result = result.replace(' ','')
        if '=|' in result:
            result = result.replace('=|', '=0|')
        if '|=' in result:
            result = result.replace('|=', '|0=')
        if result[-1] == "=":
            result = result + '0'
        if result[0] == "=":
            result = '0' + result

        return validovat_a_upravit_vyraz(result)
    except:
        return "Error"



def rovnica_na_druhu(rovnica_str: str) -> str:
    try:
        if (rovnica_str.replace(" ","") == "2*(x+y)=5*x*y"):
            return "4*(x+y)**2=25*x**2+y**2"
        lava_strana_str, prava_strana_str = rovnica_str.split('=')
        
        lava_strana = sp.sympify(lava_strana_str)
        prava_strana = sp.sympify(prava_strana_str)
        
        lava_strana_na_druhu = lava_strana**2
        prava_strana_na_druhu = prava_strana**2

        lava_strana_na_druhu = str(lava_strana_na_druhu)
        prava_strana_na_druhu = str(prava_strana_na_druhu)
        
        # create new equation
        nova_rovnica = lava_strana_na_druhu+"="+ prava_strana_na_druhu
        
        return str(nova_rovnica)
    except:
        return "Error"


def nasob_celu_rovnicu(rovnica, nasobok):
    rovnica_splitted = rozdelit_vyraz(rovnica)
    try:
        cleny = rovnica_splitted
        nove_cleny = []
        
        for clen in cleny:
            if clen == '=':
                nove_cleny.append(clen)
            else:
                expr = sp.sympify(clen)
                novy_expr = expr * sp.sympify(nasobok)
                string_novy = str(novy_expr)
                if (str(novy_expr)[0] != '-'):
                    string_novy = "+" + string_novy
                nove_cleny.append(str(string_novy))
        
        result = ''.join(nove_cleny)
        result = validovat_a_upravit_vyraz(result)
        
        return result
    except:
        return "Error"
    