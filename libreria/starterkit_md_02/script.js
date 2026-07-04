        let dimensioneForma = 40;

        function setup() {
            createCanvas(windowWidth, windowHeight);
            background(26); // Disegna lo sfondo grigio scuro UNA sola volta all'inizio
            noStroke();     
        }

        function draw() {
            // RIMOSSO il rettangolo semitrasparente continuo dal draw().
            // Ora lo schermo non si cancella più da solo.

            if (mouseIsPressed) {
                let rosso = map(mouseX, 0, width, 50, 255);
                let verde = map(mouseY, 0, height, 50, 255);
                let blu = 180; 

                fill(rosso, verde, blu);

                if (keyIsPressed) {
                    rectMode(CENTER); 
                    rect(mouseX, mouseY, dimensioneForma, dimensioneForma);
                } else {
                    circle(mouseX, mouseY, dimensioneForma);
                }
            }
        }

        function windowResized() {
            resizeCanvas(windowWidth, windowHeight);
            background(26); // Ripulisce e reinstaura lo sfondo se ridimensioni la finestra
        }

        function salvaDisegno() {
            saveCanvas('disegno', 'jpg');
        }