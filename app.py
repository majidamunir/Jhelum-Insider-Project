from flask import Flask, request, render_template, redirect, session
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/register' 

app.config['SQLALCHEMY_BINDS'] = {'fd':'mysql://root:@localhost/fd'
    
}
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'reg'  
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)


class fd(db.Model):
    __bind_key__ = 'fd'
    __tablename__ = 'fd' 
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    message = db.Column(db.String(500), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self) -> str:
        return f"{self.sno} - {self.title}"

# Route for login
@app.route('/logIn', methods=['GET', 'POST'])
def logIn():
    if request.method == 'POST':
        name = request.form['name']
        password = request.form['password'] 
        user = User.query.filter_by(name=name, password=password).first()
        if user:
            session['user_id'] = user.id
            return redirect('/')
        else:
            return "Invalid email or password"
    return render_template('SignIn/index.html')

# Route for registration
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        name = request.form['name']  
        email = request.form['email']
        password = request.form['password'] 
        user = User(name=name, email=email, password=password)
        db.session.add(user)
        db.session.commit()
        return redirect('/logIn')
    return render_template('SignIn/Register.html')

# Route for home page
@app.route('/')
def home_page():
    
     return render_template('index.html')
    
    
@app.route('/feedback', methods=['GET', 'POST'])
def feedback():
    if request.method == 'POST':
        title = request.form['title']
        message = request.form['message']
        new_fd = fd(title=title, message=message)
        db.session.add(new_fd)
        db.session.commit()
        
    allfd = fd.query.all() 
    return render_template('feedback.html', allfd=allfd)

@app.route('/delete/<int:sno>')
def delete(sno):
    # Query the feedback object with the provided sno
    feedback_to_delete = fd.query.get(sno)

    if feedback_to_delete:
         # If the feedback object exists, delete it from the database
        db.session.delete(feedback_to_delete)
        db.session.commit()
    
    # Redirect to the feedback page
    return redirect("/feedback")


#hospitals part start
@app.route('/hospital')
def hospital():
    return render_template('hospitals/hospital.html')

@app.route('/dhq')
def dhq():
    return render_template('hospitals/dhq.html')

@app.route('/ahd')
def ahd():
    return render_template('hospitals/afzal.html')

@app.route('/cardic')
def cardic():
    return render_template('hospitals/cardic.html')

@app.route('/cmh')
def cmh():
    return render_template('hospitals/cmh.html')

@app.route('/faujiF')
def  faujiF():
    return render_template('hospitals/ff.html')

@app.route('/sarmad')
def sarmad():
    return render_template('hospitals/sh.html')
#hospitals part end

#shopping part start
@app.route('/brand')
def brand():
    return render_template('shopping-points/brands.html')

@app.route('/local')
def local():
    return render_template('shopping-points/local.html')

@app.route('/marts')
def marts():
    return render_template('shopping-points/marts.html')
#shopping part catoguries
@app.route('/accessories')
def accessories():
    return render_template('shopping-points/accessories.html')

@app.route('/casual')
def casual():
    return render_template('shopping-points/casual.html')

@app.route('/formal')
def formal():
    return render_template('shopping-points/formal.html')

@app.route('/kids')
def kids():
    return render_template('shopping-points/kids.html')

@app.route('/makeup')
def makeup():
    return render_template('shopping-points/makeup.html')

@app.route('/men')
def men():
    return render_template('shopping-points/men.html')

@app.route('/shoes')
def shoes():
    return render_template('shopping-points/shoes.html')

@app.route('/westmen')
def westmen():
    return render_template('shopping-points/westmen.html')

@app.route('/westwomen')
def westwomen():
    return render_template('shopping-points/westwomen.html')


@app.route('/hp')
def historical_places():
    return render_template('hp.html')
                  

@app.route('/town')
def town_parks():
    return render_template('town.html')

@app.route('/service')
def service():
    return render_template('services.html')

@app.route('/fp')
def fp():
    return render_template('fp16.html')

#Educational institutes starts
@app.route('/edu')
def edu():
    return render_template('Edu/index.html')
#schools
@app.route('/AFS')
def AFS():
    return render_template('Edu/Air.f.School.html')

@app.route('/BFS')
def BFS():
    return render_template('Edu/Bahria.f.School.html')

@app.route('/Allied')
def Allied():
    return render_template('Edu/Allied.School.html')

@app.route('/LLS')
def LLS():
    return render_template('Edu/Lyceum.Internat.S.html')

@app.route('/City_s')
def City_s():
    return render_template('Edu/The city.s.html')

@app.route('/roots')
def roots():
    return render_template('Edu/Roots.M.S.html')

@app.route('/Darearqam')
def Darearqam():
    return render_template('Edu/Dar.E.Arqam.html')

@app.route('/FFS')
def FFS():
    return render_template('Edu/Fauji.F.S.html')

@app.route('/spirit')
def spirit():
    return render_template('Edu/The.spirit.s.html')

@app.route('/APS')
def APS():
    return render_template('Edu/APS.html')

@app.route('/convent')
def convent():
    return render_template('Edu/Convent.s.html')

@app.route('/FG')
def FG():
    return render_template('Edu/FG.S.html')

@app.route('/Educator')
def Educator():
    return render_template('Edu/Educator.s.html')

@app.route('/GHSK')
def GHSK():
    return render_template('Edu/GHS.K.G.html')

@app.route('/GGHSJ')
def GGHSJ():
    return render_template('Edu/GGHS.J.html')

@app.route('/GGHS1')
def GGHS1():
    return render_template('Edu/gghs.no.1.html')

@app.route('/GHSJJ')
def GHSJJ():
    return render_template('Edu/GHS.J.html')
@app.route('/GMI')
def GMI():
    return render_template('Edu/G.Islamia.html')


# Colleges
@app.route('/Pgc')
def Pgc():
    return render_template('Edu/Punjab.col.html')

@app.route('/BFC')
def BFC():
    return render_template('Edu/Bahria.coll.html')

@app.route('/FFC')
def FFC():
    return render_template('Edu/Fauji.f.coll.html')

@app.route('/Aspire.c')
def Aspire_c():
    return render_template('Edu/aspire-college.html')

@app.route('/Riphah')
def Riphah():
    return render_template('Edu/Riphah.coll.html')

@app.route('/SGC')
def SGC():
    return render_template('Edu/Superior.coll.html')

@app.route('/MJC')
def MJC():
    return render_template('Edu/MA.Jinnah.c.html')
@app.route('/MC')
def MC():
    return render_template('Edu/Mindverse.coll.html')

@app.route('/CCJ')
def CCJ():
    return render_template('Edu/Cadet.Coll.html')

@app.route('/Millitary')
def Millitary():
    return render_template('Edu/Millitary.coll.html')

@app.route('/GWC')
def GWC():
    return render_template('Edu/GCW.coll.html')

@app.route('/Post.gc')
def post_gc():
    return render_template('Edu/post.grad.coll.html')

@app.route('/GCGTROAD')
def GCGTROAD():
    return render_template('Edu/GC.GT.road.html')

@app.route('/Commerce_c')
def Commerce_c():
    return render_template('Edu/GC.commerce.html')

@app.route('/chakdolat')
def chakdolat():
    return render_template('Edu/GCT.chakdaulat.html')

# Universities
@app.route('/PUJC')
def PUJC():
    return render_template('Edu/PUJC.html')

@app.route('/AIOU')
def AIOU():
    return render_template('Edu/Allama.Iqbal.Uni.html')

@app.route('/VU')
def VU():
    return render_template('Edu/Virtual.Uni.html')

# Islamic Centers
@app.route('/Minhaj')
def Minhaj():
    return render_template('Edu/Minhaj.Islamic.html')

@app.route('/Alnoor')
def Alnoor():
    return render_template('Edu/AL.Noor.islamic.html')

@app.route('/Jamia_Asria')
def Jamia_Asria():
    return render_template('Edu/Jamia-Asria.html')

@app.route('/Jamia_Hanfia')
def Jamia_Hanfia():
    return render_template('Edu/Jamia-Hanfia.html')

@app.route('/Faizan_Madina')
def Faizan_Madina():
    return render_template('Edu/Faizan-e-Madinah.html')

@app.route('/Kanzul_Iman')
def Kanzul_Iman():
    return render_template('Edu/Kanzuliman.isl.center.html')
#Educational institutes ends

#softwarehouses starts
@app.route('/Software_Houses')
def Software_Houses():
    return render_template('software.houses/index.html')
@app.route('/TeqHolic')
def TeqHolic():
    return render_template('software.houses/TeqHolic.html')

@app.route('/Rev9')
def Rev9():
    return render_template('software.houses/Rev9.html')

@app.route('/Jinnahsoft')
def Jinnahsoft():
    return render_template('software.houses/Jinnahsoft.html')

@app.route('/Leaflight_Studios')
def Leaflight_Studios():
    return render_template('software.houses.Leaflight/Studios.html')

@app.route('/NextPakAgile')
def NextPakAgile():
    return render_template('software.houses/NextPakAgile.html')

@app.route('/PerfectWebSolutions')
def PerfectWebSolutions():
    return render_template('software.houses/PerfectWebSolutions.html')

@app.route('/ITSolutionNetwork')
def ITSolutionNetwork():
    return render_template('software.houses/ITSolutionNetwork.html')

@app.route('/Pre_PostTech')
def Pre_PostTech():
    return render_template('software.houses/Pre-PostTech.html')

@app.route('/BVoirTechnologies')
def BVoirTechnologies():
    return render_template('software.houses/BVoirTechnologies.html')

@app.route('/AcuitySoftwares')
def AcuitySoftwares():
    return render_template('software.houses/AcuitySoftwares.html')

@app.route('/NewITSystems')
def NewITSystems():
    return render_template('software.houses/NewITSystems.html')

@app.route('/CompetentComputers')
def CompetentComputers():
    return render_template('software.houses/CompetentComputers.html')

@app.route('/WarisSoftwareHouse')
def WarisSoftwareHouse():
    return render_template('software.houses/WarisSoftwareHouse.html')
#Software Houses ends


if __name__ =="__main__":
     app.run(debug=True)
     db.create_all()  
    