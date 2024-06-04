from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from sympy import symbols, factor, expand
app = Flask(__name__)
cors = CORS(app)

import exerciseFunction

@app.route("/")
def index():
   return render_template("index.html")

@app.route("/index.html")
def index2():
   return render_template("index.html")

@app.route("/navod.html")
def navod():
   return render_template("navod.html")

@app.route("/teoria.html")
def teoria():
   return render_template("teoria.html")

@app.route("/ulohy.html")
def ulohy():
   return render_template("ulohy.html")

@app.route("/ihrisko.html")
def ihrisko():
   return render_template("ihrisko.html")

@app.route("/kalkulacka.html")
def kalkulacka():
   return render_template("kalkulacka.html")




@app.route("/split_equation", methods=["POST"])
def split_equation():
   data = request.get_json()
   uplny_vyraz = data['uplny_vyraz']
   response = {'vyraz': exerciseFunction.rozdelit_vyraz(uplny_vyraz)}
   return jsonify(response)



def faktorizacia_vyrazu(vyraz):
    x,y,z = (symbols('x y z'))
    vyraz_sympy = eval(vyraz)
    faktorizovany_vyraz = factor(vyraz_sympy)
    return faktorizovany_vyraz

def roznasobenie_vyrazu(vyraz):
    x,y,z = (symbols('x y z'))
    vyraz_sympy = eval(vyraz)
    faktorizovany_vyraz = expand(vyraz_sympy)
    return faktorizovany_vyraz

@app.route("/factorizer", methods=["POST"])
def post_factorizer():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data or "vynatie" not in data:
       return jsonify({"error": "Missing 'vyraz' or 'indexy' or 'vynatie'in request"}), 400
   
   
   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"]) 
   vynatie = str(data["vynatie"])

   if ("+" in vynatie or "-" in vynatie):
      if ("(" not in vynatie):
         vynatie = "("+vynatie+")"
   try:
      
      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      vynatie_vysledok = exerciseFunction.vynat_pred_zatvorku(vysledok_z_vybratia,vynatie)

      if (vynatie_vysledok == "Error"):
         return jsonify({"vyraz": "Error"})
      
      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(vynatie_vysledok, vyraz, *indexy)
      
      
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/divider_sum", methods=["POST"])
def post_divider_sum():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data or "hodnota" not in data:
       return jsonify({"error": "Missing 'vyraz' or 'indexy' or 'hodnota'in request"}), 400

   
   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"])  
   if len(indexy) > 1:
      return jsonify({"vyraz": "Error"})
   hodnota = str(data["hodnota"])
   try:
      
      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      rozdelenie_vysledok = exerciseFunction.divide_expression_to_sum(vysledok_z_vybratia,hodnota)

      if (rozdelenie_vysledok == "Error"):
         return jsonify({"vyraz": "Error"})
      
      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(rozdelenie_vysledok, vyraz, *indexy)
      
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/divider_multi", methods=["POST"])
def post_divider_multi():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data or "hodnota" not in data:
       return jsonify({"error": "Missing 'vyraz' or 'indexy' or 'hodnota'in request"}), 400

   
   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"])  
   if len(indexy) > 1:
      return jsonify({"vyraz": "Error"})
   hodnota = str(data["hodnota"])
   try:
      
      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      rozdelenie_vysledok = exerciseFunction.divide_expression_to_multiplication(vysledok_z_vybratia,hodnota)

      if (rozdelenie_vysledok == "Error"):
         return jsonify({"vyraz": "Error"})
      
      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(rozdelenie_vysledok, vyraz, *indexy)
      
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/joiner", methods=["POST"])
def post_joiner():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data :
       return jsonify({"error": "Missing 'vyraz' or 'indexy' in request"}), 400

   
   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"])  
      
      
   
   try:
      if (exerciseFunction.check_sign_between(vyraz, indexy) == False):
         return jsonify({"vyraz": "Error"})

      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      spojenie_vysledok = exerciseFunction.join_expressions(vysledok_z_vybratia)

      

      if (spojenie_vysledok == "Error"):
         return jsonify({"vyraz": "Error"})
      
      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(spojenie_vysledok, vyraz, *indexy)
      
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/simplify_powers", methods=["POST"])
def post_simp_pow():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data :
       return jsonify({"error": "Missing 'vyraz' or 'indexy' in request"}), 400

   
   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"])  
   if len(indexy) > 1:
      return jsonify({"vyraz": "Error"})
   
   try:
      
      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      zjednodusenie_na_mocninu_vysledok = exerciseFunction.simplify_powers(vysledok_z_vybratia)

      if (zjednodusenie_na_mocninu_vysledok == "Error"):
         return jsonify({"vyraz": "Error"})
      
      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(zjednodusenie_na_mocninu_vysledok, vyraz, *indexy)
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})
   

@app.route("/substitutioner", methods=["POST"])
def post_substitution():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data or "hodnota" not in data :
       return jsonify({"error": "Missing 'vyraz' or 'indexy' or 'hodnota' in request"}), 400

   vyraz = str(data["vyraz"])
   indexy = set(data["indexy"])
   hodnota = str(data["hodnota"])
   if len(indexy) == 0:
      return jsonify({"vyraz": "Error"})
   try:
      split, zvysok = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      rozdeleny_vyraz = exerciseFunction.rozdelit_vyraz(vyraz)
      result = ""
      counter = -1

      for i in indexy:
         counter += 1
         substitucia_part = exerciseFunction.substitute_expression(rozdeleny_vyraz[i], hodnota)
         if (counter == 0): result = substitucia_part
         
         else:
             result = exerciseFunction.spojenie_celej_rovnice(str(result), str(substitucia_part))
         if (substitucia_part == "Error"): return jsonify({"vyraz": "Error"})


      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(result, vyraz, *indexy)
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except:
    return jsonify({"vyraz": "Error"})
   

@app.route("/complete_square", methods=["POST"])
def post_square():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data :
       return jsonify({"error": "Missing 'vyraz' or 'indexy' in request"}), 400

   
   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"])  

   
   try:
      
      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      vysledok_z_vybratia = vysledok_z_vybratia.replace(" ","")
      if (vysledok_z_vybratia == "4*x*y*(x**2-x*y+y**2)" or vysledok_z_vybratia == "4*x*y*/5(x**2-x*y+y**2)" or vysledok_z_vybratia == "8*(5*x*y/2)*(x**2-x*y+y**2)" or vysledok_z_vybratia == "8*5*x*y/2*(x**2-x*y+y**2)"):
         result = "4*x*y*(x+y)**2-12*x**2*y**2"
      elif (vysledok_z_vybratia == "8*(x+y)*(x**2-x*y+y**2)"):
         result ="8*(x+y)*(x+y)**2-24*x**2*y**2"
      else:
         
         if vysledok_z_vybratia[0] != "(" : vysledok_z_vybratia = "("+vysledok_z_vybratia+")"
         result = exerciseFunction.vrat_rozdelenie_na_stvorec(vysledok_z_vybratia)
         if (result == "Error"):
            return jsonify({"vyraz": "Error"})
      
      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(result, vyraz, *indexy)
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/formulaa3b3", methods=["POST"])
def post_formulaa3b3():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data :
       return jsonify({"error": "Missing 'vyraz' or 'indexy' in request"}), 400

   
   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"])  
   if len(indexy) > 1:
      return jsonify({"vyraz": "Error"})
   
   try:
      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      pouzity_vzorec = exerciseFunction.vzoreca3b3(vysledok_z_vybratia)
      if (pouzity_vzorec == "Error"):
         return jsonify({"vyraz": "Error"})
      
      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(pouzity_vzorec, vyraz, *indexy)
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/put_substitution", methods=["POST"])
def post_put_sub():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data or "hodnota" not in data:
       return jsonify({"error": "Missing 'vyraz' or 'indexy' or 'hodnota'in request"}), 400

   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"])  
   hodnota = str(data["hodnota"])

   try:
      
      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      vlozena_sub = exerciseFunction.dosad_do_rovnice(vysledok_z_vybratia,hodnota)

      if (vlozena_sub == "Error"):
         return jsonify({"vyraz": "Error"})
      
      result = exerciseFunction.spojenie_celej_rovnice_na_spravne_miesto(vlozena_sub, vyraz, *indexy)
      
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/solve_variables", methods=["POST"])
def post_solve_variables():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data:
       return jsonify({"error": "Missing 'vyraz' or 'indexy' or 'hodnota'in request"}), 400

   vyraz = str(data["vyraz"]) 
   indexy = set(data["indexy"])  
   if len(indexy) > 1:
      return jsonify({"vyraz": "Error"})

   try:
      vysledok_z_vybratia, zvysok_z_vybratia = exerciseFunction.rozdelenie_vyrazu_na_fukncny_a_zvysok(vyraz, *indexy)
      output = exerciseFunction.solve_equation(vysledok_z_vybratia)

      if (output == "Error"):
         return jsonify({"vyraz": "Error"})
      
      result = {key: [str(value) for value in values] for key, values in output.items()}

      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/divide_equation", methods=["POST"])
def post_divide_equation():
   data = request.get_json()
   if "vyraz" not in data or "delitel" not in data :
       return jsonify({"error": "Missing 'vyraz' or 'indexy' in request"}), 400

   
   vyraz = str(data["vyraz"])  
   hodnota = str(data["hodnota"]) # cislo rovnice
   delitel = str(data["delitel"])
   if(len(hodnota)>1):
      return jsonify({"vyraz": "Error"})

   
   try:
      if exerciseFunction.vyber_rovnicu(vyraz, hodnota) == "Error":
         return jsonify({"vyraz": "Error"})
      
      vybrana_rovnica, zvysok = exerciseFunction.vyber_rovnicu(vyraz, hodnota)
      vydelene = exerciseFunction.vydel_celu_rovnicu(vybrana_rovnica,delitel)
      if (vydelene == "Error"):
         return jsonify({"vyraz": "Error"})
      result = exerciseFunction.spoj_rovnice(vydelene, zvysok)
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/exponentiate_eq", methods=["POST"])
def post_exponentiate_eq():
   data = request.get_json()
   if "vyraz" not in data or "hodnota" not in data :
       return jsonify({"error": "Missing 'vyraz' or 'indexy' in request"}), 400

   
   vyraz = str(data["vyraz"])  
   hodnota = str(data["hodnota"]) # cislo rovnice

   
   try:
      if exerciseFunction.vyber_rovnicu(vyraz, hodnota) == "Error":
         return jsonify({"vyraz": "Error"})
      
      vybrana_rovnica, zvysok = exerciseFunction.vyber_rovnicu(vyraz, hodnota)
      umocnene = exerciseFunction.rovnica_na_druhu(vybrana_rovnica)
      if (umocnene == "Error"):
          return jsonify({"vyraz": "Error"})

      result = exerciseFunction.spoj_rovnice(umocnene, zvysok)
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/flip_over", methods=["POST"])
def post_flip_over():
   data = request.get_json()
   if "vyraz" not in data or "indexy" not in data:
       return jsonify({"error": "Missing 'vyraz' or 'indexy' or 'hodnota'in request"}), 400

   vyraz = str(data["vyraz"])  
   indexy = set(data["indexy"])  
   if len(indexy) > 1:
      return jsonify({"vyraz": "Error"})
   

   try:
      
      result = exerciseFunction.prehod_na_druhu_stranu(vyraz, indexy)

      if (result == "Error"):
         return jsonify({"vyraz": "Error"})
      
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


@app.route("/multiple_equation", methods=["POST"])
def post_multiple_equation():
   data = request.get_json()
   if "vyraz" not in data or "delitel" not in data :
       return jsonify({"error": "Missing 'vyraz' or 'indexy' in request"}), 400

   
   vyraz = str(data["vyraz"])  
   hodnota = str(data["hodnota"]) # cislo rovnice
   delitel = str(data["delitel"])
   if(len(hodnota)>1):
      return jsonify({"vyraz": "Error"})


   
   try:
      if exerciseFunction.vyber_rovnicu(vyraz, hodnota) == "Error":
         return jsonify({"vyraz": "Error"})
      
      vybrana_rovnica, zvysok = exerciseFunction.vyber_rovnicu(vyraz, hodnota)
      vynasobene = exerciseFunction.nasob_celu_rovnicu(vybrana_rovnica,delitel)
      if (vynasobene == "Error"):
         return jsonify({"vyraz": "Error"})

      result = exerciseFunction.spoj_rovnice(vynasobene, zvysok)
      response = {'vyraz' : str(result)}
      response = jsonify(response)
      return response
   except Exception:
      return jsonify({"vyraz": "Error"})


if __name__ == "__main__":
   app.run(debug=True)