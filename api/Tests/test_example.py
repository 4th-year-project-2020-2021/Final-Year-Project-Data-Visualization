import pytest

def test_pass():
    assert 1 + 1 == 2

def test_fail():
    assert 2 + 2 == 4 

def greet(person):
    return "Hi {name}".format(**person)

def test_greet():
    grace = {"name": "grace"}
    greeting = greet(grace)
    assert greeting == "Hi grace"