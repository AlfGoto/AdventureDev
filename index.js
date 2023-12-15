document.addEventListener("DOMContentLoaded", () => {

    class fieldElement {


        constructor(c, p, rt) {
            this.elem = document.getElementById(c);
            this.countP = this.elem.querySelector('.elcount')
            this.count = 0
            this.nameP = this.elem.querySelector('.fieldName')
            this.cycleTime = rt * 2
            this.cycleON = false
            this.bar = this.elem.querySelector('.bar')
            this.price = rt * rt * rt * rt * rt
            this.priceP = this.elem.querySelector('.price')
            this.priceP.innerHTML = "price : " + number(this.price)

            listelem.push(this)

            this.array = p
            this.array.push(this)
            this.key = p.indexOf(this)

            if(this.array.indexOf(this) == 0){this.price = 1}

            this.elem.addEventListener('click', () => {
                this.buy()
            })
        }

        buy() {
            if(this.array['head'].count >= this.price){
                this.count++;
                this.countP.innerHTML = number(this.count)
                this.array['head'].count -= this.price
                this.array['head'].countE.innerHTML = number(this.array['head'].count)
                if (this.count == 1) {
                    this.cycle()
                }
            }else{
                console.log("Tu as besoin de " + this.price + " " + this.array['head'].name)
            }
        }

        cycle() {
            if (this.cycleON == false) {
                if (this.count > 0) {
                    this.cycleON = true
                    console.log('cycle')
                    this.bar.style.animation = 'barON ' + this.cycleTime + 's infinite'
                    setTimeout(() => {
                        this.cycleON = false
                        if (this.key == 0) {
                            this.array['head'].add(this.count);
                        } else { this.array[this.key - 1].add(this.count); }
                        this.cycle()
                    }, this.cycleTime * 990)
                }
            }
        }

        add(arg) {
            this.count += arg
            this.countP.innerHTML = number(this.count)
            if(this.cycleON == false && this.count>0){this.cycle()}
        }


        getname() {
            return (this.nameP.innerHTML)
        }
    }




    class categories {
        constructor(e, a) {
            this.elem = document.getElementById(e)
            this.titre = this.elem.querySelector('.codeheadtitle')
            this.countE = this.elem.querySelector('.codeheadcount')
            this.count = 1
            this.array = a
            this.parent = this.elem.parentNode

            this.name = e.split('head')[0];

            catégories.push(this)

            this.array['head'] = this
        }

        add(arg) {
            this.count += arg
            this.countE.innerHTML = number(this.count)
            if(this.name == 'HTML' && CSShidden == true && this.count > 10000000){
                CSShidden = false
                catégories[1].parent.classList.remove('hidden')
            }
            if(this.name == 'CSS' && PHPhidden == true && this.count > 10000000){
                PHPhidden = false
                catégories[2].parent.classList.remove('hidden')
            }
            if(this.name == 'PHP' && SQLhidden == true && this.count > 10000000){
                SQLhidden = false
                catégories[3].parent.classList.remove('hidden')
            }
            if(this.name == 'SQL' && JShidden == true && this.count > 10000000){
                JShidden = false
                catégories[4].parent.classList.remove('hidden')
            }
        }
    }



    suffixes = ['K','M','G','T', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    function number(arg){
        if(arg < 1000){
            return arg
        }else{
            count = 0
            while(arg > 1000){
                count++
                arg = arg/1000
            }
            if(arg.toString().length < 4){
                return arg + suffixes[count - 1]
            }else{
                return arg.toFixed(2) + suffixes[count - 1]
            }
        }
    }





    let CSShidden = true
    let PHPhidden = true
    let SQLhidden = true
    let JShidden = true

    let listelem = []

    let HTML = []
    let HTMLel1 = new fieldElement('HTMLel1', HTML, 1);
    let HTMLel2 = new fieldElement('HTMLel2', HTML, 2);
    let HTMLel3 = new fieldElement('HTMLel3', HTML, 4);
    let HTMLel4 = new fieldElement('HTMLel4', HTML, 8);
    let HTMLel5 = new fieldElement('HTMLel5', HTML, 16);
    let HTMLel6 = new fieldElement('HTMLel6', HTML, 32);

    let CSS = []
    let CSSel1 = new fieldElement('CSSel1', CSS, 2);
    let CSSel2 = new fieldElement('CSSel2', CSS, 4);
    let CSSel3 = new fieldElement('CSSel3', CSS, 8);
    let CSSel4 = new fieldElement('CSSel4', CSS, 16);
    let CSSel5 = new fieldElement('CSSel5', CSS, 32);
    let CSSel6 = new fieldElement('CSSel6', CSS, 64);

    let PHP = []
    let PHPel1 = new fieldElement('PHPel1', PHP, 4);
    let PHPel2 = new fieldElement('PHPel2', PHP, 8);
    let PHPel3 = new fieldElement('PHPel3', PHP, 16);
    let PHPel4 = new fieldElement('PHPel4', PHP, 32);
    let PHPel5 = new fieldElement('PHPel5', PHP, 64);
    let PHPel6 = new fieldElement('PHPel6', PHP, 128);

    let SQL = []
    let SQLel1 = new fieldElement('SQLel1', SQL, 8);
    let SQLel2 = new fieldElement('SQLel2', SQL, 16);
    let SQLel3 = new fieldElement('SQLel3', SQL, 32);
    let SQLel4 = new fieldElement('SQLel4', SQL, 64);
    let SQLel5 = new fieldElement('SQLel5', SQL, 128);
    let SQLel6 = new fieldElement('SQLel6', SQL, 256);

    let JS = []
    let JSel1 = new fieldElement('JSel1', JS, 16);
    let JSel2 = new fieldElement('JSel2', JS, 32);
    let JSel3 = new fieldElement('JSel3', JS, 64);
    let JSel4 = new fieldElement('JSel4', JS, 128);
    let JSel5 = new fieldElement('JSel5', JS, 256);
    let JSel6 = new fieldElement('JSel6', JS, 512);

    let catégories = []
    let HTMLel = new categories('HTMLheadstage', HTML)
    let CSSel = new categories('CSSheadstage', CSS)
    let PHPel = new categories('PHPheadstage', PHP)
    let SQLel = new categories('SQLheadstage', SQL)
    let JSel = new categories('JSheadstage', JS)


});
