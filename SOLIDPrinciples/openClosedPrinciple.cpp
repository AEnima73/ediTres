//
// Open Closed Principle
//
#include <iostream>
#include <vector>

class Coche {
    public:
        virtual int precioMedioCoche() = 0;
};

class Renault: public Coche {  
    int precioMedioCoche() { 
        return 18000; 
    }
};

class Audi: public Coche {  
    int precioMedioCoche() { 
        return 25000;
    }
};

class Mercedes: public Coche {  
    int precioMedioCoche() {
        return 27000; 
    }
};

void imprimirPrecioMedioCoche(std::vector<Coche*> arrayCoches)
{
    for (auto coche : arrayCoches)
    {
        std::cout << coche->precioMedioCoche() << std::endl;
    }
}

int main()
{
    std::vector<Coche*> arrayCoches =
    {
        new Renault(),
        new Audi(),
        new Mercedes()
    };

    imprimirPrecioMedioCoche(arrayCoches);

    return 0;
}