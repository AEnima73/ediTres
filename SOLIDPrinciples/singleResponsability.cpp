//
// Ejercicio de Principios S.O.L.I.D
// Principio de Responsabilidad única. 
// 
#include <iostream>
#include <string>

using namespace std;

class Coche {
    public:
        Coche (string _marca) {
            marca = _marca;
      }
        ~Coche() {}
        
        string getMarcaCoche() {
           std::cout << marca << std::endl;
      }
    private:
        string marca;
};

class CocheDB {
    public:
        void guardarCocheDB(Coche* coche){}
        void eliminarCocheDB(Coche* coche){}
};

int main()
{
    Coche* coche = new Coche("BMW");
    coche->getMarcaCoche();

    return 0;
}