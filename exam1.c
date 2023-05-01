#include<stdlib.h>
int fun(int);
int fun(int n){
    if(n==0)
     return 0;
fun(n-1);
printf("%d",n);
}

int main()
{
 fun(3.89);
  
   return 0; 
}