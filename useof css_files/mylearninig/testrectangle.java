class rectangle{
int height;
int lenght;
rectangle(int h, int l){
    height=h;
    lenght=l;
}
void print(){
    System.out.println("area is"+lenght*height);
}
}
class testrectangle{
    public static void main(String[] args){
        rectangle boj1=new rectangle(12,12);
        rectangle boj2=new rectangle(10,12);
        rectangle boj3=new rectangle(12,2);
       boj1.print();
       boj2.print();
       boj3.print();

    }
}