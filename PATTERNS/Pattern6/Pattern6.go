package main

import "fmt"

func main(){
	var n int;
        fmt.Printf("Enter the number:");
		fmt.Scanln(&n);
        for i:= 1; i <= n; i++ {
            for j:= 1; j <= i; j++ {
                fmt.Printf("*");
            }
            fmt.Printf("\n");
        }
}